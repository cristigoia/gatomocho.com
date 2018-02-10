package models

type Document struct {
	Meta        `json:"meta"`
	Body string `json:"body"`
	Id   string `json:"id"`
}
