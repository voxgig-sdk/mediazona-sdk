# Mediazona SDK utility: make_context

from mediazona_sdk.core.context import MediazonaContext


def make_context_util(ctxmap, basectx):
    return MediazonaContext(ctxmap, basectx)
