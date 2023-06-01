let maior = document.querySelector("input#maiorid")
let menor = document.querySelector("input#meorid")

valor = Number(maior.value)

let resultado = document.getElementById("valores")

function maiorque(a,c){
    let valor = a > c
    return valor
}

function validar(maior, menor){
    document.getElementById('valores').style.display = "flex"
    let aviso = document.getElementsByClassName('aviso')
    
    if(maiorque(maior, menor)){

        resultado.innerHTML = ` o numero ${maior} é maior que ${menor}!`
        
        for(let i = 0; i < aviso.length; i++){
            aviso[i].style.display = 'none'

        }
    }else if(!maiorque(maior, menor)) {

        alert("ERRO")

        for(let i = 0; i < aviso.length; i++){
            aviso[i].style.display = 'flex'
        }

    }else{

        resultado.innerHTML = "algo de errado aconteceu"

    }
}