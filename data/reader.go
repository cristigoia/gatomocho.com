package data

import (
	"bufio"
	"strings"
	"os"
	"fmt"
	"gopkg.in/yaml.v2"
	"errors"
	"gopkg.in/russross/blackfriday.v2"
	"github.com/tonymtz/go-blog/models"
)

const delimiter = "---"

func DocumentFromPost(filename string) (*models.Document, error) {
	return readDataFrom(filename, "_")
}

func DocumentFromPage(filename string) (*models.Document, error) {
	return readDataFrom(filename, "/")
}

func readDataFrom(filename string, sep string) (doc *models.Document, err error) {
	f, _ := os.Open(filename)

	// read document by lines
	s := bufio.NewScanner(f)

	meta, err := readMeta(s)

	if err != nil {
		return &models.Document{}, err
	}

	splits := strings.Split(filename, sep)
	name := splits[len(splits)-1]
	name = strings.Split(name, ".")[0]

	doc = &models.Document{}
	doc.Id = name
	doc.Meta = meta

	// read body
	var b []byte
	for s.Scan() {
		b = append(append(b, s.Bytes()...), '\n')
	}
	if err := s.Err(); err != nil {
		return &models.Document{}, err
	}
	dat := blackfriday.Run(b)
	doc.Body = string(dat)
	return doc, nil
}

func readMeta(s *bufio.Scanner) (models.Meta, error) {
	// scan starting delimeter
	if ok := s.Scan(); !ok {
		return models.Meta{}, s.Err()
	}
	if s.Text() != delimiter {
		return models.Meta{}, fmt.Errorf("%q not valid delimeter", s.Text())
	}
	// scan metadata block
	var b []byte
	for s.Scan() {
		if s.Text() == delimiter {
			m := models.Meta{}
			err := yaml.Unmarshal(b, &m)
			if err != nil {
				return m, err
			}
			return m, nil
		}
		b = append(append(b, s.Bytes()...), '\n')
	}
	if err := s.Err(); err != nil {
		return models.Meta{}, err
	}

	// end of file
	return models.Meta{}, errors.New("no closing delimeter")
}
