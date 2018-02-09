package posts

import (
	"path/filepath"
	"github.com/labstack/gommon/log"
	"time"
	"os"
	"bufio"
	"gopkg.in/yaml.v2"
	"errors"
	"fmt"
	"gopkg.in/russross/blackfriday.v2"
	"strings"
)

type PostsRepository interface {
	GetAll() []*Document
}

type postsRepository struct{}

func (this *postsRepository) GetAll() (posts []*Document) {
	files, err := filepath.Glob("data/posts/*.md")

	if err != nil {
		log.Fatal(err)
	}

	for file := range files {
		output, err := newDocument(files[file])

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

// ===

const delim = "---"

func newDocument(filename string) (doc *Document, err error) {
	f, _ := os.Open(filename)

	// read document by lines
	s := bufio.NewScanner(f)

	meta, err := readMeta(s)

	if err != nil {
		return &Document{}, err
	}

	splits := strings.Split(filename, "_")
	name := splits[len(splits)-1]
	name = strings.Split(name, ".")[0]

	doc = &Document{}
	doc.Id = name
	doc.Meta = meta

	// read body
	var b []byte
	for s.Scan() {
		b = append(append(b, s.Bytes()...), '\n')
	}
	if err := s.Err(); err != nil {
		return &Document{}, err
	}
	dat := blackfriday.Run(b)
	doc.Body = string(dat)
	return doc, nil
}

func readMeta(s *bufio.Scanner) (Meta, error) {
	// scan starting delimeter
	if ok := s.Scan(); !ok {
		return Meta{}, s.Err()
	}
	if s.Text() != delim {
		return Meta{}, fmt.Errorf("%q not valid delimeter", s.Text())
	}
	// scan metadata block
	var b []byte
	for s.Scan() {
		if s.Text() == delim {
			m := Meta{}
			err := yaml.Unmarshal(b, &m)
			if err != nil {
				return m, err
			}
			return m, nil
		}
		b = append(append(b, s.Bytes()...), '\n')
	}
	if err := s.Err(); err != nil {
		return Meta{}, err
	}

	// end of file
	return Meta{}, errors.New("no closing delimeter")
}

type Document struct {
	Meta        `json:"meta"`
	Body string `json:"body"`
	Id   string `json:"id"`
}

type Meta struct {
	Title string    `json:"title"`
	Date  time.Time `json:"date"`
	Tags  []string  `json:"tags"`
}
