from application.models.dao.productDao import ProdutoDAO
from application.models.entity.produto import Product
from flask import render_template
from application import app

product_list = ProdutoDAO().listAll()

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/list')
def listar():
    return render_template("produto_list.html", product_list=product_list)