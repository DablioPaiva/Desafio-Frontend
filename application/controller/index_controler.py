from application.models.dao.productDao import ProdutoDAO
from flask import render_template
from application import app

product_list = ProdutoDAO().listAll()

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', product_list = product_list)

