import requests
from ex_01 import _extractLinks

def _searchWithKeywords(keywords):

    keywords = keywords.replace(' ', '+')
    url = f'https://www.google.com/search?q={keywords}'
    request = requests.request('GET', url=url)
    return request.text


def main():
    """
    Crie um script que busque no google. Utilize a url:
    http://www.google.com/search. Além disso, passe um parâmetro chamado “q”
    com o valor a ser buscado.
    """
    keywords = input("Search's keywords: ")
    search = _searchWithKeywords(keywords)
    print(search)

