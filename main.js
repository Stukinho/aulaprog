let nomeUsuario ='Otavio,Tato';
// alert (nomeUsuario);
function soma (a,b) {
    return a+b;
    console.log(soma(1,2));
}
function multiplicar (a,b) {
    return a*b;
    console.log(multiplicar(6,6));
}
let areaTriangulo = function(a,b){
    return a*b/2;
}
console.log(areaTriangulo);

let numero1 = parseFloat(prompt('Digite o primeiro número:'));
let numero2 = parseFloat(prompt('Digite o segundo número:'));
let numero3 = parseFloat(prompt('Digite o terceiro número:'));

let media = (numero1 + numero2 + numero3) / 3;

let resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
    Você digitou:<br>
    Primeiro número: ${numero1}<br>
    Segundo número: ${numero2}<br>
    Terceiro número: ${numero3}<br>
    A média dos números é: ${media}
    ;