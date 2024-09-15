package backend

import (
	"fmt"
	"os"
	"path/filepath"
	"os/user"
	"log"
	"encoding/json"
	"regexp"
)

type Data struct {
	Path string `json:"path"`
	FullPath string `json:"fullPath"`
}

func userName() string {
	user, err := user.Current()
	if err != nil {
		log.Fatalf("Error: %v", err)
	}
	return user.HomeDir
}

var re = regexp.MustCompile(`\.unitypackage`)

func Match() string{
	datas := []Data{}

	paths := []string{}
	fullPaths := []string{}

	userHome := userName()
	download := filepath.Join(userHome, "Downloads")
	err := filepath.WalkDir(download, func(path string, info os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if !info.IsDir() && filepath.Ext(path) == ".unitypackage" {
			basePath := re.ReplaceAllString(filepath.Base(path), "")
			paths = append(paths, basePath)
			fullPaths = append(fullPaths, path)
		}
		return nil

	})

	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}

	for i := 0; i < len(paths); i++ {
		data := Data{
			Path: paths[i],
			FullPath: fullPaths[i],
		}
		datas = append(datas, data)
	}
	
	jsonData, err := json.Marshal(datas)
	if err != nil {
		fmt.Println("JSON変換に失敗しました: ", err)
		return ""
	}
	return string(jsonData)
}