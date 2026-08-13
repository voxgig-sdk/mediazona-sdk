# Mediazona SDK configuration


def make_config():
    return {
        "main": {
            "name": "Mediazona",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "infographic",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "cae8add5",
                      "kind": "query",
                      "name": "cachebuster",
                      "orig": "cachebuster",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/infographics/g200w/urls.json.gz",
                "parts": [
                  "infographics",
                  "g200w",
                  "urls.json.gz",
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
