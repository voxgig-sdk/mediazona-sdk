# Mediazona SDK utility: make_context
require_relative '../core/context'
module MediazonaUtilities
  MakeContext = ->(ctxmap, basectx) {
    MediazonaContext.new(ctxmap, basectx)
  }
end
