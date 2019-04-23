start();

function start() {
    var btn = document.getElementById('exec');
        btn.onclick = function () {
            exec();
        };
    }

function exec() {
    var inputA = document.getElementById('firstNumber');
    var inputB = document.getElementById('secondNumber');

    var inputResult = document.getElementById('result');
    var operator = document.getElementById('operator');

    var a = parseInt(inputA.value, 10);
    var b = parseInt(inputB.value, 10);

    if (isNaN(a) || isNaN(b)) {
        console.log('Insira um numero válido, por favor!');
    } else {
        var res = 0;
        if (operator.value == '+') {
            res = a + b;
        } else if (operator.value == '-') {
            res = a - b;
        } else if (operator.value == '*') {
            res = a * b;
        } else if (operator.value == '/') {
            res = a / b;
        }

        inputResult.value = res;
    }
}