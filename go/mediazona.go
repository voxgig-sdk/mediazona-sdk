package voxgigmediazonasdk

import (
	"github.com/voxgig-sdk/mediazona-sdk/go/core"
	"github.com/voxgig-sdk/mediazona-sdk/go/entity"
	"github.com/voxgig-sdk/mediazona-sdk/go/feature"
	_ "github.com/voxgig-sdk/mediazona-sdk/go/utility"
)

// Type aliases preserve external API.
type MediazonaSDK = core.MediazonaSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MediazonaEntity = core.MediazonaEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MediazonaError = core.MediazonaError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewInfographicEntityFunc = func(client *core.MediazonaSDK, entopts map[string]any) core.MediazonaEntity {
		return entity.NewInfographicEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMediazonaSDK = core.NewMediazonaSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMediazonaSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MediazonaSDK  { return NewMediazonaSDK(nil) }
func Test() *MediazonaSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
