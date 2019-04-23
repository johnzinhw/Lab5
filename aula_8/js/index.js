start();

function start() {
    var btn = document.getElementById('btnName');
    btn.onclick = function() {
        var inputName = document.getElementById('name'); //aspas simples ou dupla é string
        //alert(inputName.value);

        if (inputName.value == '') { //== comparando ===compara o valor e o tipo tambem
            inputName.value = 'input empty!';
        } else {
            inputName.value = inputName.value.toUpperCase();
        }

        if (inputName.value.startsWith('R')){
            console.log('Seu nome tem uma letra bonita');
        }
        // mostra a ultima palavra da string
        var names = inputName.value.split(' ');
        console.log(names[names.length - 1 ]); //imprimir no console

        //tira a primeira e ultima letra
        var newValue = inputName.value.substring(1, inputName.value.length - 1);
        console.log(newValue);

        //tira o espacamento do inicio e do fim
        newValue = inputName.value.trim();
        console.log(newValue);

        //achar um caracter especial
        var index = inputName.value.indexOf('@');
        console.log(index);

        //achar varios caracteres especiais ( regular expression)
        inputName.value.search (/[áàíóôêé]/g);
        console.log(index);

        console.log("I'm here!");
    };
}
