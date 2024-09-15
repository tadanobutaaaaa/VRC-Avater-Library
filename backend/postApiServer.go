package backend

import (
	"bytes"
	"fmt"
	"net/http"
	"io"
)

func main(){
	url := "http://127.0.0.1:8000/path"

	data := Match()
	var jsonData = []byte(data)

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	req.Header.Set("Content-Type", "application/json; charset=UTF-8")

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	fmt.Println("response Status:", res.Status)
	fmt.Println("response Headers:", res.Header)
	body, _ := io.ReadAll(res.Body)
	fmt.Println("response Body", string(body))
}