package main

import (
	"context"
	"errors"
	"fmt"
	"VRC-Avater-Library/backend"
)

// App struct
type App struct {
	ctx context.Context
	BrowserName string
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) SetBrowser(name string) error {
    if name == "" {
		return errors.New("Missing information")
    }
	backend.BrowserName = name
    fmt.Println(backend.BrowserName)
	return nil
}