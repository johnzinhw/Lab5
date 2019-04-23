start();

function start() {
    var addButton = document.getElementById('addBtn');
    addButton.onclick = function () {
        addListItem();
    }
}

//pegando o escrito do label e jogando pra baixo no li.
function addListItem() {        //validando, limpando e focando.
    var inputName = document.getElementById('name');
    var errorElement = document.getElementById('msgError');

    if (inputName.value.trim() === '') {
        //altera todos que é hide por vazio
        errorElement.className = errorElement.className.replace('hide','').trim();
    } else {
        errorElement.className = errorElement.className + ' hide';
        var parentNode = document.getElementById('convidados');

        var li = document.createElement('li');
        var text = document.createTextNode(inputName.value);
        li.appendChild(text);
        parentNode.appendChild(li);

        inputName.value = '';
    }
    inputName.focus();
}