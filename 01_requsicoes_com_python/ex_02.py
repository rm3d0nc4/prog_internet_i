from utils import *
import requests
import re

def _extractSelectedTagContent(tag, url):


    expression =  re.compile(f"<{tag}.*?>(.*?)<\/{tag}>", re.S)
    request = requests.get(url)
    selectedTagContent = expression.findall(request.text)
    return selectedTagContent

def main():
    """
    Baixe uma página e exiba o conteúdo de uma determinada tag lida pelo
    teclado.
    """
    tag = input('Tag: ')
    selectedTagContent = _extractSelectedTagContent(tag, getUrl())
    for content in selectedTagContent:
        print(content)