from duckduckgo_search import DDGS
from duckduckgo_search.exceptions import DuckDuckGoSearchException, RatelimitException
from fastapi import HTTPException
from searchIcons import SearchIcons
import os
import time

def duckduckgo_search(pathName_list):
    try:
        with DDGS() as ddgs:
            for data in pathName_list:
                try:
                    results = ddgs.text(
                        keywords=f'{data["path"]} site:booth.pm/ja/items/',
                        region='wt-wt',
                        safesearch='on',
                        timelimit=None,
                        max_results=1
                    )
                    data['url'] = results[0]["href"]
                    print(f'{data["path"]} site:booth.pm/ja/items/',)
                    SearchIcons(data['url'], data['path'], data['fullPath'])
                    time.sleep(10)
                except RatelimitException as e:
                    print(f"エラーが発生しました: {e}")
                    raise HTTPException(status_code=429, detail="Rate limit exceeded",)
                except DuckDuckGoSearchException as e:
                    print(f"エラーが発生しました: {e}")
                    raise HTTPException(status_code=500, detail="Server Error",)
                except Exception as e:  # その他の予期しないエラー
                    print(f"予期しないエラーが発生しました: {e}")
                    raise HTTPException(status_code=500, detail="Unexpected Error")
    except Exception as e:
        print(f"インスタンスエラーが発生しました: {e}")
        raise HTTPException(status_code=500, detail="Instance Error")
    
    print(pathName_list)
    return pathName_list