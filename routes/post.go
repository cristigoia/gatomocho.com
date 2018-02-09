package routes

import (
	"github.com/labstack/echo"
	"net/http"
	"github.com/tonymtz/go-blog/repositories/posts"
)

type PostRoute interface {
	Get(context echo.Context) error
}

type postRoute struct {
	postsRepository posts.PostsRepository
}

func (this *postRoute) Get(context echo.Context) error {
	return context.JSON(http.StatusOK, this.postsRepository.GetAll())
}

func NewPostRoute(postsRepository posts.PostsRepository) PostRoute {
	return &postRoute{
		postsRepository,
	}
}
