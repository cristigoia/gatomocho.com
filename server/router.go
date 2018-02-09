package server

import (
	"github.com/labstack/echo"
	"github.com/tonymtz/go-blog/routes"
	"github.com/tonymtz/go-blog/repositories/posts"
)

func router(e *echo.Echo) {
	meRoute := routes.NewMeRoute()

	e.GET("/me", meRoute.Get)

	postsRepository := posts.NewPostsRepository()
	postRoute := routes.NewPostRoute(postsRepository)

	e.GET("/post", postRoute.Get)

	//e.Static("/", "static/build")
}
