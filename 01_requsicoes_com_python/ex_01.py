from utils import getUrl
import requests
import re
# "https://pt.wikipedia.org/wiki/Cascading_Style_Sheets"

def _extractLinks(url):


    request = requests.get(url)
    text = request.text
    
    exp1 = """<a.*?href=[",'](.*?)[",'].*?\>"""
    expression1 = re.compile(exp1, re.S)
    links = expression1.findall(text)
    
    return links;

def main():
    """
    Baixe uma página e exiba seus links. Para isso, extraia o atributo href das tags
    <a>.
    """
    links = _extractLinks(getUrl())

    for link in links:
        print(link)