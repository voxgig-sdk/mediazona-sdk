<?php
declare(strict_types=1);

// Mediazona SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MediazonaFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MediazonaBaseFeature();
            case "test":
                return new MediazonaTestFeature();
            default:
                return new MediazonaBaseFeature();
        }
    }
}
