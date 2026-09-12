# Mediazona SDK configuration

module MediazonaConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Mediazona",
        "slug" => "mediazona",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://s3.zona.media",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "infographic" => {},
        },
      },
      "entity" => {
        "infographic" => {
          "fields" => [
            {
              "format" => "uri",
              "name" => "url",
              "short" => "URL to the infographic resource",
              "type" => "`$STRING`",
            },
          ],
          "name" => "infographic",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "cae8add5",
                        "kind" => "query",
                        "name" => "cachebuster",
                        "orig" => "cachebuster",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/infographics/g200w/urls.json.gz",
                  "segments" => [
                    {
                      "lit" => "infographics",
                    },
                    {
                      "lit" => "g200w",
                    },
                    {
                      "lit" => "urls.json.gz",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "cachebuster",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.urls`",
                  },
                  "parts" => [
                    "infographics",
                    "g200w",
                    "urls.json.gz",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MediazonaFeatures.make_feature(name)
  end
end
