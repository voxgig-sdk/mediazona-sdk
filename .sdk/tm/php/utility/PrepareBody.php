<?php
declare(strict_types=1);

// Mediazona SDK utility: prepare_body

class MediazonaPrepareBody
{
    public static function call(MediazonaContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
