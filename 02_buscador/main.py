import requests_cache
from utils import generateRanking, viewRanking, countOccurrences
from counter import Counter
from search_engine import searchEngine

def search(keyword, url, depth):
    requests_cache.install_cache('my_cache') 
    visitedLinks = []
    circularPagesCounter = Counter()
    referenceCounter = Counter()
    searchEngine(keyword, url, depth, visitedLinks, referenceCounter, circularPagesCounter);

    return [visitedLinks, referenceCounter, circularPagesCounter]




url = 'https://kogama.com.br/'
keyword = 'game'
depth = 0

pesquisa = search(keyword, url, depth)

visitedLinks: list = pesquisa[0]
referenceCounter: Counter = pesquisa[1]
circularPagesCounter: Counter = pesquisa[2]

ranking = generateRanking(keyword, visitedLinks, referenceCounter, circularPagesCounter)

# print(referenceCounter.getValue(visitedLinks[0]))
# print(circularPagesCounter.getValue(visitedLinks[0]))
# print(countOccurrences(keyword, visitedLinks))


viewRanking(ranking)

