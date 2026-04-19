<?php
/**
 * Shared authentication helpers using HMAC-signed tokens.
 *
 * Token format: base64url(payload).base64url(hmac_sha256(payload, secret))
 * Payload JSON: {"uid":<int>,"role":"admin","exp":<unix-ts>}
 *
 * Set the AUTH_SECRET environment variable to a long random string on the server.
 */

function auth_get_secret() {
    $secret = getenv('AUTH_SECRET');
    if (!$secret || strlen($secret) < 32) {
        // Fail closed — never fall back to a weak/default secret.
        error_log('[auth.php] AUTH_SECRET env var missing or too short.');
        return null;
    }
    return $secret;
}

function base64url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64url_decode($data) {
    $remainder = strlen($data) % 4;
    if ($remainder) {
        $data .= str_repeat('=', 4 - $remainder);
    }
    return base64_decode(strtr($data, '-_', '+/'));
}

function auth_issue_token($userId, $role, $ttlSeconds = 86400) {
    $secret = auth_get_secret();
    if (!$secret) return null;

    $payload = json_encode([
        'uid'  => (int)$userId,
        'role' => $role,
        'exp'  => time() + $ttlSeconds,
    ]);
    $payloadEncoded = base64url_encode($payload);
    $signature = hash_hmac('sha256', $payloadEncoded, $secret, true);
    return $payloadEncoded . '.' . base64url_encode($signature);
}

function auth_verify_token($token) {
    $secret = auth_get_secret();
    if (!$secret || !$token) return null;

    $parts = explode('.', $token);
    if (count($parts) !== 2) return null;

    [$payloadEncoded, $signatureEncoded] = $parts;
    $expectedSig = hash_hmac('sha256', $payloadEncoded, $secret, true);
    $providedSig = base64url_decode($signatureEncoded);

    if (!hash_equals($expectedSig, $providedSig)) return null;

    $payload = json_decode(base64url_decode($payloadEncoded), true);
    if (!is_array($payload) || !isset($payload['exp']) || $payload['exp'] < time()) {
        return null;
    }
    return $payload;
}

function auth_require_admin() {
    $headers = function_exists('getallheaders') ? getallheaders() : [];
    $authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');

    if (!$authHeader || stripos($authHeader, 'Bearer ') !== 0) {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Unauthorized"]);
        exit;
    }

    $token = trim(substr($authHeader, 7));
    $payload = auth_verify_token($token);

    if (!$payload || ($payload['role'] ?? '') !== 'admin') {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Unauthorized"]);
        exit;
    }

    return $payload;
}
?>
