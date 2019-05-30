start();

var numero1 = 0;
var numero2 = 1;
var numero3 = 0;
var flag = 0;
var lista = document.getElementById('lista');

function start() {
    var btn = document.getElementById("btnCalc");


    btn.onclick = function () {
        if (flag == 0) {
            flag = 1;
        } else {
            numero1 = 0;
            numero2 = 1;
            numero3 = 0;

            clearAll();
        }

        var input = document.getElementById("num");//pega numero que cara digitou
        console.log(input.value);
        input = parseInt(input.value);

        for (var i = 0; i < input; i++) {
            if (i == 0) {
                criaFilho(numero2);
            } else {
                numero3 = numero1 + numero2;
                numero1 = numero2;
                numero2 = numero3;
                criaFilho(numero3);
            }
        }
    }
}

function clearAll() {
    lista.innerHTML = ' ';
}

function criaFilho(filho) {
    var textNode = document.createTextNode(filho);
    var li = document.createElement('li');
    li.appendChild(textNode);
    var lista = document.getElementById('lista');
    lista.appendChild(li);
}