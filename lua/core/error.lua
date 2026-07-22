-- Mediazona SDK error

local MediazonaError = {}
MediazonaError.__index = MediazonaError


function MediazonaError.new(code, msg, ctx)
  local self = setmetatable({}, MediazonaError)
  self.is_sdk_error = true
  self.sdk = "Mediazona"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MediazonaError:error()
  return self.msg
end


function MediazonaError:__tostring()
  return self.msg
end


return MediazonaError
