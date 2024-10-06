import requests
import time
from searchIcons import downloadImages

API_KEY = 'AIzaSyAVo_XnZjhwHaWOMzlOVqxFpyd0dmzm6zk'
CSE_ID = '100d459ed822542ed'

def google_search(pathName_list):
    for data in pathName_list:
        url = 'https://www.googleapis.com/customsearch/v1'
        paramas = {
            'q': data['path'],
            'key': API_KEY,
            'cx': CSE_ID
        }
        response = requests.get(url, params=paramas)
        results = response.json()
        data['url'] = results['items'][0]['formattedUrl']

        downloadImages(results['items'][0]['pagemap']['metatags'][0]['og:image'], data['path'])
        time.sleep(2)
    print(pathName_list)
    return pathName_list
