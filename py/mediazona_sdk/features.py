# Mediazona SDK feature factory

from mediazona_sdk.feature.base_feature import MediazonaBaseFeature
from mediazona_sdk.feature.ratelimit_feature import MediazonaRatelimitFeature
from mediazona_sdk.feature.retry_feature import MediazonaRetryFeature
from mediazona_sdk.feature.test_feature import MediazonaTestFeature
from mediazona_sdk.feature.timeout_feature import MediazonaTimeoutFeature


_FEATURES = {
    "base": lambda: MediazonaBaseFeature(),
    "ratelimit": lambda: MediazonaRatelimitFeature(),
    "retry": lambda: MediazonaRetryFeature(),
    "test": lambda: MediazonaTestFeature(),
    "timeout": lambda: MediazonaTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
