import requests
import json

def _findAddresByCEP(cep):
    cep = cep.replace('-','')
    url = f'https://viacep.com.br/ws/{cep}/json/'
    request = requests.get(url);

    if(request.status_code == 200):
        dictAdress = json.loads(request.content)
        if('erro' not in dictAdress.keys()):
            output = f'Adress: {dictAdress["logradouro"]}, {dictAdress["bairro"]}, {dictAdress["localidade"]}, {dictAdress["uf"]}'

            return output
        else:
            return ('ERRO(invalid CEP)')
    else:
        return ('ERRO(invalid CEP)')

def main():
    cep = input("Cep: ")
    result = _findAddresByCEP(cep)

    print(f"Result:\n\t{result}")



