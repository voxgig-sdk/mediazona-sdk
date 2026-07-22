# ProjectName SDK exists test

import pytest
from mediazona_sdk import MediazonaSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MediazonaSDK.test(None, None)
        assert testsdk is not None
