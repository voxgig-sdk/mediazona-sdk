package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewInfographicEntityFunc func(client *MediazonaSDK, entopts map[string]any) MediazonaEntity

