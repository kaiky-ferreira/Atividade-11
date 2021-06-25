function calcula(num1, operador, num2){

    if(operador == "+"){
        return(num1+num2);
    }else if(operador == "-"){
        return(num1-num2);
    }else if(operador == "/"){
        return(num1/num2);
    }else if(operador == "*"){
        return(num1*num2);
    }else{
        alert("Operador Inválido!");
    }
}




function exibeResultado(){
let mensagem = document.createElement("p");
mensagem.innerHTML = parseFloat(num1El.value)+" "+opEl.value+" "+parseFloat(num2El.value)+" = "+
calcula(parseInt(num1El.value), opEl.value, parseInt(num2El.value));
div.appendChild(mensagem);
}



let div = document.querySelector("#conteudo");
let num1El = document.querySelector("#n1");
let opEl = document.querySelector("#op");
let num2El = document.querySelector("#n2");
let botao = document.querySelector("#botao");

botao.addEventListener("click", exibeResultado);