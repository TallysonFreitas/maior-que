let maior = document.getElementById("maior")
let menor = document.getElementById("menor")
const botao = document.getElementById("avancar")
const valores = document.getElementById("valores")

function submit(){
    let num1 = Number(maior.value)
    let num2 = Number(menor.value)
    let aviso = document.getElementsByClassName("aviso")
    valores.style.display = `flex`


    for(let i = 0 ; i < aviso.length ; i++){
        aviso[i].style.display = "flex"
    }

    if(num1 == 0 || num2 == 0){
        for(let i = 0; i < aviso.length ; i++){
            aviso[i].innerHTML = "Digite algo para continuar"
            aviso[i].style.backgroundColor = `#E66855`
        }
        valores.style.display = `none`
    }else{
    
        if(num1 > num2){
            for(let i = 0 ; i < aviso.length ; i++){
                aviso[i].style.backgroundColor = "#129430"  
            }
            aviso[0].innerHTML = "Esse é o maior"
            aviso[1].innerHTML = "Esse é o menor"
            
            valores.innerHTML = `O maior valor é<strong> ${num1} </strong> e o menor valor é <strong>${num2}</strong>`

        }else if(num1 < num2){
            for(let i = 0 ; i < aviso.length ; i++){
                aviso[i].style.backgroundColor = "#E66855"
            }
            aviso[0].innerHTML = "Os valores estao trocados"
            aviso[1].innerHTML = "Os valores estao trocados"
            valores.innerHTML = `O <strong>maior(${num1})</strong> e<strong> menor(${num2})</strong> valor estao invertidos`
        }else{
            for(let i = 0 ; i < aviso.length ; i++){
                aviso[i].style.backgroundColor = "#C7AB0A"
            }
            aviso[0].innerHTML = "Igual"
            aviso[1].innerHTML = "Igual"
            valores.innerHTML = `os valores sao iguais: ${num1}`
        }
    }
}


