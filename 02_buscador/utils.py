import requests
from bs4 import BeautifulSoup
from counter import Counter

def countOccurrences(keyword: str, links: list):
    occurrencesByLink = {}

    for link in links:
        text = BeautifulSoup(fetchTextPage(link), 'html.parser').get_text()
        occurrences = [text[(0 if i - 20 < 0 else i-20):i+20] for i in range(len(text)) if text[i:].startswith(keyword)]
        occurrencesByLink[link] = len(occurrences)
    return occurrencesByLink

def fetchTextPage(link):
    request = requests.get(link)
    # print(request.text)
    return request.text

def generateFullLink(baseUrl: str, childUrl: str):
    if(childUrl[0] == '/'):
        return baseUrl + childUrl[1:];
    elif(childUrl) == "#":
        return baseUrl
    else:
        return childUrl
    
def calculateScore(references, circularReferences, termoccurrences):
    circularReferences = 1 if circularReferences <= 1 else circularReferences
    # print(f'{references}, {circularReferences}, {termoccurrences}')
    score = ((references + termoccurrences * 2) / 3) / circularReferences
    return score * 100

def generateRanking(keyword: str, visitedLinks:list, referenceCounter: Counter, circularPagesCounter: Counter):
    print("Generatint ranking... Please wait")
    ranking = {}
    occurrences = countOccurrences(keyword, visitedLinks)
    for link in visitedLinks:
        score = calculateScore(referenceCounter.getValue(link), circularPagesCounter.getValue(link), occurrences[link])

        ranking[link] = score
    sortedRanking = {}
    for key, value in sorted(ranking.items(), key=lambda item: (item[1]), reverse=True):
        sortedRanking[key] = value


    print("Ranking finished!")
    return sortedRanking

def viewRanking(ranking: dict):
    for key, value in ranking.items():
        print(f'{key}: {value:.2f}')