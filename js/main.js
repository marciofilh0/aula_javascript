
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<p>Obrigado por clicar</p>"
    //alert("Obrigado por clicar")
}

function redirecionar(){
   // window.open("https://google.com");  //Abre em outra abra
    window.location.href = "http://google.com"; //Abre na mesma aba
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
}

function load(){
    alert("Página carregada")
}

function valor(elemento){
    alert(elemento.value)
}



/*
var validar = 0;

function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*
function soma (n1,n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
//var nome = "Japão";
var novo_nome = prompt();
alert (setReplace("Vai Japão", "Japão", novo_nome))
alert (soma(5, 10))
*/


/*
var d = new Date();
alert (d.getDay());
alert (d.getHours());
alert (d.getMinutes());
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count)
}
*/


/*
var count = 0;
while(count<5){
    console.log(count);
    count++
}
*/

/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if(idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"Vermelha", tamanho:"grande"},{nome:"mamão", cor:"laranja", tamanho:"médio"}]
console.log(frutas[0],frutas[1]);
*/


/*
var fruta = {nome:"maçã", cor:"Vermelha", tamanho:"grande"}
console.log(fruta.nome,fruta.cor);
alert(fruta.tamanho);
*/

//alert("Meu segundo js");
//var nome="Marcio"
//console.log(nome);
//console.log(nome.replace("Marcio","Joao"));   replace também funciona no alert

/*
var lista = ["pera", "uva", "laranja"];
lista.push("maçã");
//lista.pop();
console.log(lista);
console.log(lista.toString()[1]);
console.log(lista.join("-"));
*/





