package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Mediazona",
			"slug": "mediazona",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://s3.zona.media",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"infographic": map[string]any{},
			},
		},
		"entity": map[string]any{
			"infographic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "url",
						"short": "URL to the infographic resource",
						"type": "`$STRING`",
					},
				},
				"name": "infographic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "cae8add5",
											"kind": "query",
											"name": "cachebuster",
											"orig": "cachebuster",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/infographics/g200w/urls.json.gz",
								"parts": []any{
									"infographics",
									"g200w",
									"urls.json.gz",
								},
								"select": map[string]any{
									"exist": []any{
										"cachebuster",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.urls`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
