package backend

import (
	"fmt"
	"os"
	"path/filepath"
	"os/user"
	"log"
)

var BrowserName string

func User() string {
	user, err := user.Current()
	if err != nil {
		log.Fatalf("Error: %v", err)
	}
	return user.HomeDir
}

func Match() {
	User := User()
	download := filepath.Join(User, "Downloads")
	err := filepath.WalkDir(download, func(path string, info os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if !info.IsDir() && filepath.Ext(path) == ".unitypackage" {
			fmt.Println(path)
		}
		return nil
	})

	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}