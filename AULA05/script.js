function lerJSON(){
    const req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const divJSON = document.getElementById("divJSON")
            divJSON.innerHTML = this.responseText + "<br><hr>"
            const objPessoa = JSON.parse(this.responseText)
            txt = "Nome: " + objPessoa.nome
            txt += "<br>Idade: " + objPessoa.idade
            txt += "<br>Casado: "
            //objPessoa.casado ? txt += "sim": txt += "não" 
            if(objPessoa.casado){
                txt += "sim" + "<br>Conjuge: " + objPessoa.conjuge.nome
            }else{
                txt += "não"
            }
            txt += "<br>Filhos: "
            objPessoa.filhos.forEach(filho => {
                txt += "<br>Nome: " + filho.nome + " - Idade: " + filho.idade
            })
            txt += "<br>Formações: "
            objPessoa.formacoes.forEach(formacao => {
                txt += " - " + formacao
            })
            divJSON.innerHTML += txt
        }
    }
    req.open("GET", "dados.json", true)
    req.send()
}

function buscarProdutos(){
    const req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const divProdutos = document.getElementById("divProdutos")
            txt ='<table border="1">'
            txt +='<tr>'
            txt +='     <th>Código</th>'
            txt +='     <th>Nome</th>'
            txt +='     <th>Preço</th>'
            txt +='</tr>'
            objJSON = JSON.parse(this.responseText)
            const produtos = objJSON.produtos
            produtos.forEach(prod => {
                txt += "<tr>"
                txt += "    <td>" + prod.id + "</td>"
                txt += "    <td>" + prod.nome + "</td>"
                txt += "    <td>" + prod.preco + "</td>"
                txt += "</tr>"
            })
            txt += "</table>"
            divProdutos.innerHTML = txt
        }
    }
    req.open("GET", "servidor.php", true)
    req.send()
}