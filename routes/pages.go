package routes

import (
	"github.com/labstack/echo"
	"github.com/tonymtz/go-blog/repositories/pages"
	"net/http"
)

type PagesRoute interface {
	Get(context echo.Context) error
}

type pagesRoute struct {
	pagesRepository pages.PagesRepository
}

func (this *pagesRoute) Get(context echo.Context) error {
	return context.JSON(http.StatusOK, this.pagesRepository.GetAll())
}

func NewPagesRoute(pagesRepository pages.PagesRepository) PagesRoute {
	return &pagesRoute{
		pagesRepository,
	}
}
