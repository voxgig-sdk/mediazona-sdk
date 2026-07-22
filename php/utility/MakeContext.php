<?php
declare(strict_types=1);

// Mediazona SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MediazonaMakeContext
{
    public static function call(array $ctxmap, ?MediazonaContext $basectx): MediazonaContext
    {
        return new MediazonaContext($ctxmap, $basectx);
    }
}
