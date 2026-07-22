# Mediazona SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MediazonaFeatures
  def self.make_feature(name)
    case name
    when "base"
      MediazonaBaseFeature.new
    when "test"
      MediazonaTestFeature.new
    else
      MediazonaBaseFeature.new
    end
  end
end
