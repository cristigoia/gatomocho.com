package pages

import (
	"path/filepath"
	"github.com/labstack/gommon/log"
	"github.com/tonymtz/go-blog/models"
	"github.com/tonymtz/go-blog/data"
)

type PagesRepository interface {
	GetAll() []*models.Document
}

type postsRepository struct{}

func (this *postsRepository) GetAll() (posts []*models.Document) {
	files, err := filepath.Glob("data/pages/*.md")

	if err != nil {
		log.Fatal(err)
	}

	for file := range files {
		output, err := data.DocumentFromPage(files[file])

		if err != nil {
			log.Fatal(err)
		}

		posts = append(posts, output)
	}

	return posts
}

func NewPagesRepository() PagesRepository {
	return &postsRepository{}
}
