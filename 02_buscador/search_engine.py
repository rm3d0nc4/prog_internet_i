from utils import fetchTextPage, generateFullLink
from bs4 import BeautifulSoup
from counter import Counter

def searchEngine(keyword: str, url: str, depth: int, visitedLinks: list, referenceCounter: Counter, circularPageCounter: Counter):
    print(f"Searching in {url}")    
    text = fetchTextPage(url)
    soup = BeautifulSoup(text, 'html.parser')
    links = [generateFullLink(url, link['href'])  for link in soup.find_all('a') if link.has_attr('href')  and link["href"] != '']  
    for link in links: 
        if(link == url):
            circularPageCounter.addReference(link)
        referenceCounter.addReference(str(link))
    


    if (url not in visitedLinks): 
        visitedLinks.append(url)
    if depth > 0 and len(links) != 0:
        for link in links:
                if(link in visitedLinks):
                    continue
                else:
                    searchEngine(keyword, link, depth - 1, visitedLinks, referenceCounter, circularPageCounter)

