package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Mediazona",
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
						"active": true,
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
				},
				"name": "infographic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "cae8add5",
											"kind": "query",
											"name": "cachebuster",
											"orig": "cachebuster",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
