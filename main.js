

function agregar(valor){
    
    document.getElementById('display').value += valor;
}

function borrar(){
    document.getElementById('display').value = "";
}

function operacion(signo){
    document.getElementById('display').value += " " + signo + " "
}

function calcular(){
    let resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
}