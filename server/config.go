package server

import (
	"log"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Config() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	router(e)

	log.Println("> server running on port 3210")
	e.Start(":3210")
}
