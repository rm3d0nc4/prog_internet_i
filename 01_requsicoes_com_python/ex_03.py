import requests
from utils import *
from bs4 import BeautifulSoup
import re



def _countTermOccurrences(url, term):
        
    request = requests.get(url)
    soup = BeautifulSoup(request.content, 'html.parser')

    for data in soup(['style','script']):
        data.decompose()

    content =  ''.join(soup.stripped_strings) 
    expression = re.compile(f'(.{{20}}){term}(.{{20}})', re.S)

    occurrences = expression.finditer(content)
    return occurrences

def _printOccurrences(occurrences):
    index = 1
    for occurrence in occurrences:
        groups = list(occurrence.groups())
        print(f"Occurrence {index}:\n\tbefore: {groups[0]}\n\tafter: {groups[1]}")
        index+=1



def main():
    """
    Receba uma página como entrada e um termo a ser buscado e liste as
    ocorrências dentro dessa página. Atente para extrair o texto da página sem as
    tags e, ao encontrar uma ocorrência do termo, exiba os 20 caracteres antes e
    20 caracteres depois.
    """
    term = input("Term: ")
    countTermOccurrence = _countTermOccurrences(getUrl(), term)
    _printOccurrences(countTermOccurrence)





