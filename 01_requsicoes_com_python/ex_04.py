import requests
from utils import *
import os

def _downloadImage(url, pathToSave):
    
    request = requests.get(url)
    with open(pathToSave, 'wb') as file:
        file.write(request.content)
        

def main():
    """
    Dado um endereço de uma imagem na internet, baixe o arquivo e salve-o
    localmente.
    """
    name = input('Filename: ')
    path = os.getcwd() + f'/{name}.jpeg'
    _downloadImage(getUrl(), path)
    print("Image downloaded successfully")
    print(f"Path: {path}")







