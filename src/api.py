from bs4 import BeautifulSoup
import requests

### functions that gets us html file from the url
def download_file(url):
    """
    Download html file from the url
    """
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        return None

def get_m3u8_links(url):
    """
    Get m3u8 links from the url
    """
    html = download_file(url)
    if html:
        soup = BeautifulSoup(html, 'html.parser')
        m3u8_links = soup.find_all('iframe')
        
        return m3u8_links
    else:
        return None

print(download_file('https://f1livegp.me/f1/live.php'))