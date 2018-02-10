package models

import "time"

type Meta struct {
	Title    string    `json:"title"`
	Date     time.Time `json:"date"`
	Tags     []string  `json:"tags"`
	IsListed bool      `json:"is_listed" yaml:"is_listed"`
}
