# Mediazona SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Mediazona",
            "slug": "mediazona",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://s3.zona.media",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "infographic": {},
            },
        },
        "entity": {
      "infographic": {
        "fields": [
          {
            "format": "uri",
            "name": "url",
            "short": "URL to the infographic resource",
            "type": "`$STRING`",
          },
        ],
        "name": "infographic",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "cae8add5",
                      "kind": "query",
                      "name": "cachebuster",
                      "orig": "cachebuster",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/infographics/g200w/urls.json.gz",
                "segments": [
                  {
                    "lit": "infographics",
                  },
                  {
                    "lit": "g200w",
                  },
                  {
                    "lit": "urls.json.gz",
                  },
                ],
                "select": {
                  "exist": [
                    "cachebuster",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.urls`",
                },
                "parts": [
                  "infographics",
                  "g200w",
                  "urls.json.gz",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
