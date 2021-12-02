from application.models.entity.produto import Product
import json
from typing import List


class ProdutoDAO():
    def listAll(self) -> List[Product]:
        result = []
        with open('products.json', 'r') as file:
            product_list = json.load(file)
            result = self.convertDictList(product_list)
        return result

    def convertDictList (self, products):
        resultado = []
        for produto in products:
            product = Product()
            product.setId(produto['id'])
            product.setName(produto['name'])
            product.setDescription(produto['description'])
            product.setImage(produto['image'])
            product.setOldPrice(produto['oldPrice'])
            product.setPrice(produto['price'])
            product.setCount(produto['installments']['count'])
            product.setValue(produto['installments']['value'])
            resultado.append(product)
        return resultado