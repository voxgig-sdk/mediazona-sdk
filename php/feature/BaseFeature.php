<?php
declare(strict_types=1);

// Mediazona SDK base feature

class MediazonaBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MediazonaContext $ctx, array $options): void {}
    public function PostConstruct(MediazonaContext $ctx): void {}
    public function PostConstructEntity(MediazonaContext $ctx): void {}
    public function SetData(MediazonaContext $ctx): void {}
    public function GetData(MediazonaContext $ctx): void {}
    public function GetMatch(MediazonaContext $ctx): void {}
    public function SetMatch(MediazonaContext $ctx): void {}
    public function PrePoint(MediazonaContext $ctx): void {}
    public function PreSpec(MediazonaContext $ctx): void {}
    public function PreRequest(MediazonaContext $ctx): void {}
    public function PreResponse(MediazonaContext $ctx): void {}
    public function PreResult(MediazonaContext $ctx): void {}
    public function PreDone(MediazonaContext $ctx): void {}
    public function PreUnexpected(MediazonaContext $ctx): void {}
}
