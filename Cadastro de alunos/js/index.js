start();

function start() {
    var addButton = document.getElementById('addBtn');
    addButton.onclick = function () {
        addAlunos();
    }
}

//pegando o escrito do label e jogando pra baixo no li.
function addAlunos() {        //validando, limpando e focando.
    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');
    var inputCpf = document.getElementById('cpf');

    var errorElement = document.getElementById('msgError');

    if (inputName.value.trim() === '') {
        //altera todos que é hide por vazio
        errorElement.className = errorElement.className.replace('hide', '').trim();
    } else {
        errorElement.className = errorElement.className + ' hide';
        var parentNode = document.getElementById('alunos');

        var li = document.createElement('td');
        var text = document.createTextNode(inputName.value);
        li.appendChild(text);
        parentNode.appendChild(li);

        var email = document.createElement('td');
        var text1 = document.createTextNode(inputEmail.value);
        email.appendChild(text1);
        parentNode.appendChild(email);

        var cpf = document.createElement('td');
        var text2 = document.createTextNode(inputCpf.value);
        cpf.appendChild(text2);
        parentNode.appendChild(cpf);

        inputName.value = '';
        inputEmail.value = '';
        inputCpf.value = '';

    }
    inputName.focus();
    

}










