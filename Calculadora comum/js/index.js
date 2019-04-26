start();
var operation = null;

function start() {

    document.getElementById('btn_one').onclick = function() { appendValue("1") };
    document.getElementById('btn_two').onclick = function() { appendValue("2") };
    document.getElementById('btn_three').onclick = function() { appendValue("3") };
    document.getElementById('btn_four').onclick = function() { appendValue("4") };
    document.getElementById('btn_five').onclick = function() { appendValue("5") };
    document.getElementById('btn_six').onclick = function() { appendValue("6") };
    document.getElementById('btn_seven').onclick = function() { appendValue("7") };
    document.getElementById('btn_eight').onclick = function() { appendValue("8") };
    document.getElementById('btn_nine').onclick = function() { appendValue("9") };
    document.getElementById('btn_zero').onclick = function() { appendValue("0") };

    //Operações
    document.getElementById('btn_add').onclick = function() { setOperation("+") };
    document.getElementById('btn_sub').onclick = function() { setOperation("-") };
    document.getElementById('btn_multi').onclick = function() { setOperation("X") };
    document.getElementById('btn_div').onclick = function() { setOperation("/") };
    document.getElementById('btn_resultado').onclick = function() { resultado(); };
    document.getElementById('btn_clear').onclick = function() { clear(); };
}

function appendValue(value) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML += value;
}

function setOperation(sinal) {
    appendValue(' ' + sinal + ' ');
    operation = sinal;
}

function resultado() {
    var resultado = document.getElementById('resultado');
    var items = resultado.innerHTML.split(' ');
    
    for (var i = 0; i < items.length; i++) {
        if (!items[i].trim() == '') {
            var a = parseInt(items[i], 10);
            var b = parseInt(items[i + 2], 10);

            if (items[i + 1] == '+') {
                appendValue(' = ' + (a + b));
            } else if (items[i + 1] == '-') {
                appendValue(' = ' + (a - b));
            } else if (items[i + 1] == 'X') {
                appendValue(' = ' + (a * b));
            } else if (items[i + 1] == '/') {
                appendValue(' = ' + (a / b));
            }
        }
    }
}

function clear() {
    var clear = document.getElementById('resultado');
    clear.innerHTML = '';
    
}
