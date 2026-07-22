-- Mediazona SDK exists test

local sdk = require("mediazona_sdk")

describe("MediazonaSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
