# Mediazona SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MediazonaUtility.registrar = ->(u) {
  u.clean = MediazonaUtilities::Clean
  u.done = MediazonaUtilities::Done
  u.make_error = MediazonaUtilities::MakeError
  u.feature_add = MediazonaUtilities::FeatureAdd
  u.feature_hook = MediazonaUtilities::FeatureHook
  u.feature_init = MediazonaUtilities::FeatureInit
  u.fetcher = MediazonaUtilities::Fetcher
  u.make_fetch_def = MediazonaUtilities::MakeFetchDef
  u.make_context = MediazonaUtilities::MakeContext
  u.make_options = MediazonaUtilities::MakeOptions
  u.make_request = MediazonaUtilities::MakeRequest
  u.make_response = MediazonaUtilities::MakeResponse
  u.make_result = MediazonaUtilities::MakeResult
  u.make_point = MediazonaUtilities::MakePoint
  u.make_spec = MediazonaUtilities::MakeSpec
  u.make_url = MediazonaUtilities::MakeUrl
  u.param = MediazonaUtilities::Param
  u.prepare_auth = MediazonaUtilities::PrepareAuth
  u.prepare_body = MediazonaUtilities::PrepareBody
  u.prepare_headers = MediazonaUtilities::PrepareHeaders
  u.prepare_method = MediazonaUtilities::PrepareMethod
  u.prepare_params = MediazonaUtilities::PrepareParams
  u.prepare_path = MediazonaUtilities::PreparePath
  u.prepare_query = MediazonaUtilities::PrepareQuery
  u.graphql_body = MediazonaUtilities::GraphqlBody
  u.graphql_errors = MediazonaUtilities::GraphqlErrors
  u.result_basic = MediazonaUtilities::ResultBasic
  u.result_body = MediazonaUtilities::ResultBody
  u.result_headers = MediazonaUtilities::ResultHeaders
  u.transform_request = MediazonaUtilities::TransformRequest
  u.transform_response = MediazonaUtilities::TransformResponse
}
