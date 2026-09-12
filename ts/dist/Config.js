"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Mediazona',
        slug: "mediazona",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://s3.zona.media",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            infographic: {},
        }
    };
    entity = {
        "infographic": {
            "fields": [
                {
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the infographic resource",
                    "type": "`$STRING`"
                }
            ],
            "name": "infographic",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "cae8add5",
                                        "kind": "query",
                                        "name": "cachebuster",
                                        "orig": "cachebuster",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/infographics/g200w/urls.json.gz",
                            "segments": [
                                {
                                    "lit": "infographics"
                                },
                                {
                                    "lit": "g200w"
                                },
                                {
                                    "lit": "urls.json.gz"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "cachebuster"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.urls`"
                            },
                            "parts": [
                                "infographics",
                                "g200w",
                                "urls.json.gz"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map