let menor = document.querySelector("input#menorid")
let maior = document.querySelector("input#maiorid")
let resultado = document.getElementById("valores")

function maiorque(a,b){
    return a > b
}

function validar(maior,menor){
    document.getElementById('valores').style.display = "flex"
    if(maiorque(maior > menor)){
        resultado.innerHTML = ` o numero ${maior} é maior que ${menor}!`
    }else{
        resultado.innerHTML = ` o numero ${maior} é menor ou igual a ${menor}!`

    }
}