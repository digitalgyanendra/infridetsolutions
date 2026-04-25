<?php
/**
 * Centralized CORS handling.
 * Whitelists trusted origins instead of using a wildcard.
 * Always handles OPTIONS preflight requests.
 */

function send_cors_headers() {
    $allowed = [
        'https://infridetsolutions.com',
        'https://www.infridetsolutions.com',
        'https://infridetsolutions.lovable.app',
    ];

    // Also allow any *.lovable.app preview while developing.
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $isLovablePreview = $origin && preg_match('#^https://[a-z0-9\-]+\.lovable(?:project)?\.app$#i', $origin);

    if (in_array($origin, $allowed, true) || $isLovablePreview) {
        header("Access-Control-Allow-Origin: $origin");
        header('Vary: Origin');
        header('Access-Control-Allow-Credentials: true');
    }

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Max-Age: 86400');

    // Security headers (defense in depth — also set in .htaccess)
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('Referrer-Policy: strict-origin-when-cross-origin');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
