from utils import getUrl
from ex_02 import _extractSelectedTagContent


def _extractTable(url):
    table = _extractSelectedTagContent("table", url);
    return table



def main():
    """
    Pesquise alguma página com uma tabela de classificação e extraia dessa
    página a tabela. Um exemplo desse tipo de tabela segue abaixo:
    https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/
    """

    table = _extractTable(getUrl())
# url = ('https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/')
    print(table[0])

