package main

import (
	"context"
	"vrc_avater_library/backend"
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

func (a *App) FileManeger(apiName string) string {
	return backend.PostServer(apiName)
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods