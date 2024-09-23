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

let numero1 = parseInt(prompt('Digite o primeiro número:'));
let numero2 = parseInt(prompt('Digite o segundo número:'));
let numero3 = parseInt(prompt('Digite o terceiro número:'));

function media(a,b,c) {
return (a+b+c)/3;
}
console.log(media(1,2,3));
document.write(media(numero1,numero2,numero3))