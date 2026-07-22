<?php
declare(strict_types=1);

// Mediazona SDK utility: result_headers

class MediazonaResultHeaders
{
    public static function call(MediazonaContext $ctx): ?MediazonaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
