# Mediazona SDK feature factory

from feature.base_feature import MediazonaBaseFeature
from feature.test_feature import MediazonaTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MediazonaBaseFeature(),
        "test": lambda: MediazonaTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
