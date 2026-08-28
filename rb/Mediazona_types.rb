# frozen_string_literal: true

# Typed models for the Mediazona SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Infographic entity data model.
#
# @!attribute [rw] url
#   @return [String, nil]
Infographic = Struct.new(
  :url,
  keyword_init: true
)

# Request payload for Infographic#list.
#
# @!attribute [rw] cachebuster
#   @return [String, nil]
InfographicListMatch = Struct.new(
  :cachebuster,
  keyword_init: true
)

