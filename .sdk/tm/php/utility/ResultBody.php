<?php
declare(strict_types=1);

// Mediazona SDK utility: result_body

class MediazonaResultBody
{
    public static function call(MediazonaContext $ctx): ?MediazonaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
