package core

type MediazonaError struct {
	IsMediazonaError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMediazonaError(code string, msg string, ctx *Context) *MediazonaError {
	return &MediazonaError{
		IsMediazonaError: true,
		Sdk:              "Mediazona",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MediazonaError) Error() string {
	return e.Msg
}
