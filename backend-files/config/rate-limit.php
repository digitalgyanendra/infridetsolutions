<?php
/**
 * Simple file-based rate limiter for login attempts.
 * Prevents brute-force attacks. For production, prefer Redis or DB.
 */

function rate_limit_check($key, $maxAttempts = 5, $windowSeconds = 300) {
    $dir = sys_get_temp_dir() . '/infridet_rl';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);

    $file = $dir . '/' . md5($key) . '.json';
    $now = time();

    $data = ['count' => 0, 'first' => $now];
    if (file_exists($file)) {
        $raw = @file_get_contents($file);
        $parsed = $raw ? json_decode($raw, true) : null;
        if (is_array($parsed)) $data = $parsed;
    }

    // Reset window if expired
    if (($now - ($data['first'] ?? $now)) > $windowSeconds) {
        $data = ['count' => 0, 'first' => $now];
    }

    $data['count'] = ($data['count'] ?? 0) + 1;
    @file_put_contents($file, json_encode($data), LOCK_EX);

    if ($data['count'] > $maxAttempts) {
        $retryAfter = $windowSeconds - ($now - $data['first']);
        http_response_code(429);
        header('Retry-After: ' . max(1, $retryAfter));
        echo json_encode([
            'success' => false,
            'message' => 'Too many attempts. Try again in ' . max(1, $retryAfter) . ' seconds.',
        ]);
        exit;
    }
}

function rate_limit_reset($key) {
    $file = sys_get_temp_dir() . '/infridet_rl/' . md5($key) . '.json';
    if (file_exists($file)) @unlink($file);
}
