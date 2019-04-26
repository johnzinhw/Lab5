start();
var inputIds = ['nMeses', 'taxaJurosMensal', 'valorDepRegular'];

function start() {
    var btn = document.getElementById('btnCadastrar');
    btn.onclick = function () {

        if (todosCamposValidos()) {
            var resultado = realizaOperacao();
            printarNaTela(resultado);
        }
    }
}

function printarNaTela(resultado) {
    var p = document.getElementById('resultado');
    var textNode = document.createTextNode("Valor obtido ao final : R$" + resultado.toFixed(2));
    p.appendChild(textNode);
}

function realizaOperacao() {
    var resultado;

    var j = document.getElementById(inputIds[1]);
    j = j.value;

    var n = document.getElementById(inputIds[0]);
    var n = n.value;

    var p = document.getElementById(inputIds[2]);
    p = p.value;

    resultado = realizaCalculo(j, n, p);

    console.log(resultado.toFixed(2));

    return resultado;
}

function realizaCalculo(j, n, p) {
    var result;
    result = (1 + (j / 100)) * (((Math.pow(1 + (j / 100), n)) - 1) / (j / 100)) * p;
    return result;
}
function todosCamposValidos() {
    var todosValidos = true;

    for (var i = 0; i < inputIds.length; i++) {
        var id = inputIds[i];
        var input = document.getElementById(id);
        if (input.value === '') {
            if (todosValidos) {
                input.focus();
            }
            todosValidos = false;
            mostrarErro(id);
        } else {
            esconderErro(id);
        }

    }

    return todosValidos;
}

function mostrarErro(id) {
    var element = document.getElementById(id + 'Error');
    element.className = element.className.replace('hide', '').trim();
    console.log();
}

function esconderErro(id) {
    var element = document.getElementById(id + 'Error');
    if (element.className.indexOf('hide') === -1) {
        element.className = element.className + ' hide';
    }
}