function validation() {
    if (document.getElementById('name').value.length<3) {
        alert("Por favor, informe o seu nome!");
        document.getElementById("name").focus();
        return false;
    }

    if (document.getElementById("email").value.length<9){
        alert("Por favor, informe um endereço de e-mail válido!");
        document.getElementById("email").focus();
        return false;
    }

    if (document.getElementById("cpf").value.length!=11){
        alert("Por favor, informe um CPF válido!");
        document.getElementById("cpf").focus();
        return false;
    }

    else {
        alert("Cadastro realizado com sucesso!")
    }
    return true;
}

function validations() {
    if (document.getElementById('friendname').value.length<3) {
        alert("Por favor, informe o nome do seu amigo!");
        document.getElementById("friendname").focus();
        return false;
    }

    if (document.getElementById("friendmail").value.length<9){
        alert("Por favor, informe um endereço de e-mail válido!");
        document.getElementById("friendmail").focus();
        return false;
    }

    else {
        alert("Convite realizado com sucesso!")
    }
    return true;
}

function callApi(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

window.onload = function (produto) {

    var image = innerHTML(produto.image);
    var productname = innerHTML(produto.name);
    var price = innerHTML(produto.oldPrice);
    var productprice = innerHTML(produto.price);
    var otherprice = innerHTML(produto.count);
    var description = innerHTML(produto.description);


    document.getElementById("ftext").innerHTML = price;

}

function fill() {
    let data = callApi("");
    let produtos = JSON.parse(data);
    let box = document.getElementById("products_item");
    produtos.forEach(element => {
        let card = createCard(element);
        box.appendChild(card);
    });
}