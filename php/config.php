<?php
declare(strict_types=1);

// Mediazona SDK configuration

class MediazonaConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Mediazona",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://s3.zona.media",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "infographic" => [],
                ],
            ],
            "entity" => [
        'infographic' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'infographic',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'cae8add5',
                        'kind' => 'query',
                        'name' => 'cachebuster',
                        'orig' => 'cachebuster',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/infographics/g200w/urls.json.gz',
                  'parts' => [
                    'infographics',
                    'g200w',
                    'urls.json.gz',
                  ],
                  'select' => [
                    'exist' => [
                      'cachebuster',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MediazonaFeatures::make_feature($name);
    }
}
