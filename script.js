function limpar(){
document.getElementById('resultado').innerHTML = '';
}
function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function adicionar(dig){
    var op = document.getElementById('resultado').innerHTML;
    if (op === "" && /[*\/]/.test(dig)) {
        return;
    }
    if (/[+\-*/.]$/.test(op) && /[+\-*/.]/.test(dig)) {
        return; 
    }
document.getElementById('resultado').innerHTML = op+dig;

}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
}
}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    
    if (/[0-9]/.test(key)) {
        adicionar(key);
    } else if (/[+\-*/.]/.test(key)) {
        adicionar(key);
    } else if (key === 'Enter' || key === '=') {
        calcular();
    } else if (key === 'Backspace') {
        apagar();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        limpar();
    }
});