function mostrarMensagem(){
alert('Bem-vindo ao projeto de Inclusão Digital')
}
function validar(){
let nome=document.getElementById('nome').value;
if(nome==''){
alert('Digite seu nome');
return false;
}
alert('Mensagem enviada');
}