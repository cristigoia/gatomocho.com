package server

import (
	"github.com/labstack/echo"
	"github.com/tonymtz/go-blog/routes"
	"github.com/tonymtz/go-blog/repositories/posts"
	"github.com/tonymtz/go-blog/repositories/pages"
)

func router(e *echo.Echo) {
	apiV1 := e.Group("/api")

	meRoute := routes.NewMeRoute()

	apiV1.GET("/me", meRoute.Get)

	postsRepository := posts.NewPostsRepository()
	postRoute := routes.NewPostRoute(postsRepository)
	apiV1.GET("/posts", postRoute.Get)

	pagesRepository := pages.NewPagesRepository()
	pagesRoute := routes.NewPagesRoute(pagesRepository)
	apiV1.GET("/pages", pagesRoute.Get)
}
