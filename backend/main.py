from fastapi import FastAPI
from duckduckgoSearch import duckduckgo_search
from typing import List
from googleSearch import google_search

app = FastAPI()

@app.post("/duckduckgo")
def search_duckduckgo(pathList: List[dict]):
    print(pathList)
    return duckduckgo_search(pathList)

@app.post("/google")
def search_google(pathList: List[dict]):
    print(pathList)
    return google_search(pathList)