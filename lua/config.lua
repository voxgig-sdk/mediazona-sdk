-- Mediazona SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Mediazona",
      slug = "mediazona",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://s3.zona.media",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["infographic"] = {},
      },
    },
    entity = {
      ["infographic"] = {
        ["fields"] = {
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "URL to the infographic resource",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "infographic",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "cae8add5",
                      ["kind"] = "query",
                      ["name"] = "cachebuster",
                      ["orig"] = "cachebuster",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/infographics/g200w/urls.json.gz",
                ["segments"] = {
                  {
                    ["lit"] = "infographics",
                  },
                  {
                    ["lit"] = "g200w",
                  },
                  {
                    ["lit"] = "urls.json.gz",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "cachebuster",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.urls`",
                },
                ["parts"] = {
                  "infographics",
                  "g200w",
                  "urls.json.gz",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
