let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let oi = document.querySelector('#oi');

function éoClicas() {
    oi.innerHTML = `Olá ${nome.value}, seja bem-vindo(a)! Você tem ${idade.value} anos.`;
}