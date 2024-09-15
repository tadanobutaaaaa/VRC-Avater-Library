from fastapi import FastAPI
from duckduckgoSearch import duckduckgo_search
from typing import List

app = FastAPI()

@app.post("/path")
def index(pathList: List[dict]):
    print(pathList)
    return duckduckgo_search(pathList)