package posts

import (
	"path/filepath"
	"github.com/labstack/gommon/log"
	"github.com/tonymtz/go-blog/models"
	"github.com/tonymtz/go-blog/data"
)

type PostsRepository interface {
	GetAll() []*models.Document
}

type postsRepository struct{}

func (this *postsRepository) GetAll() (posts []*models.Document) {
	files, err := filepath.Glob("data/posts/*.md")

	if err != nil {
		log.Fatal(err)
	}

	for file := range files {
		output, err := data.DocumentFromPost(files[file])

		if err != nil {
			log.Fatal(err)
		}

		posts = append(posts, output)
	}

	return posts
}

func NewPostsRepository() PostsRepository {
	return &postsRepository{}
}
