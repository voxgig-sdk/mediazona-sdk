-- Mediazona SDK configuration

local function make_config()
  return {
    main = {
      name = "Mediazona",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["active"] = true,
            ["name"] = "url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
        },
        ["name"] = "infographic",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "cae8add5",
                      ["kind"] = "query",
                      ["name"] = "cachebuster",
                      ["orig"] = "cachebuster",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/infographics/g200w/urls.json.gz",
                ["parts"] = {
                  "infographics",
                  "g200w",
                  "urls.json.gz",
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
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
