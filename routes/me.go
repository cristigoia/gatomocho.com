package routes

import (
	"github.com/labstack/echo"
	"net/http"
)

type MeRoute interface {
	Get(context echo.Context) error
}

type meRoute struct{}

func (this *meRoute) Get(context echo.Context) error {
	return context.String(http.StatusOK, "Hello, World!")
}

func NewMeRoute() MeRoute {
	return &meRoute{}
}
