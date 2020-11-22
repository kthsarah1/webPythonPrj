import requests
from bs4 import BeautifulSoup
webpage = requests.get("http://www.1004n.co.kr/content/01intro/09_36.php")
soup = BeautifulSoup(webpage.content, "html.parser")
print(soup)
