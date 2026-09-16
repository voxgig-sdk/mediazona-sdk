# Mediazona SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MediazonaFeatures
  def self.make_feature(name)
    case name
    when "base"
      MediazonaBaseFeature.new
    when "ratelimit"
      MediazonaRatelimitFeature.new
    when "retry"
      MediazonaRetryFeature.new
    when "test"
      MediazonaTestFeature.new
    when "timeout"
      MediazonaTimeoutFeature.new
    else
      MediazonaBaseFeature.new
    end
  end
end
