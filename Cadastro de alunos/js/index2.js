var lineIndexToEdit = -1;
var inputIds = ['name', 'email', 'cpf'];
start();

function start() {
    var btn = document.getElementById('addBtn');
    btn.onclick = function () {
        addNewAluno();
    };
}

function addNewAluno() {
    if (isAllFieldsValid()) {
        if (lineIndexToEdit === -1) {
            var newLine = createNewLine();
            addNewLineInTable(newLine);
        } else {
            editExistLine();
        }
        clearFields();
        lineIndexToEdit = -1;
    }
}

function editExistLine() {
    var table = document.getElementById('alunos');
    var tbody = table.tBodies[0];
    var tr = tbody.children[lineIndexToEdit -1];

    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        tr.children[i].innerHTML=input.value;
    }
}
//responsavel por criar uma nova linha apos os 3 campos inseridos
function createNewLine() {
    var tr = document.createElement('tr');
    for (var i = 0; i < inputIds.length; i++) {
        tr.appendChild(createColumn(inputIds[i]));
    }
    createButtonColumns(tr);
    return tr;
}

function createButtonColumns(tr) {
    var buttonsContent = ['Editar', 'Excluir'];

    for (var i = 0; i < buttonsContent.length; i++) {
        tr.appendChild(createButtonColumn(buttonsContent[i]));
    }
}

function createButtonColumn(content) {
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'button';
    input.value = content;
    if (content === 'Excluir') {
        input.onclick = removeLine;
    } else if (content === 'Editar') {
        input.onclick = editLine;
    }
    td.appendChild(input);    //faz com que ele crie um td ... usando o input que teria no html, mas fez por aqui.
    return td;
}

function editLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    lineIndexToEdit = tr.rowIndex;

    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = tr.children[i].innerHTML;
    }
}

//o this representa o input
//excluir a linha
function removeLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var table = document.getElementById('alunos');
    var tbody = table.tBodies[0];
    tbody.removeChild(tr);
}

//responsavel por criar cada td 
function createColumn(id) {
    var td = document.createElement('td');
    var input = document.getElementById(id);
    var textNode = document.createTextNode(input.value);
    td.appendChild(textNode);
    return td;
}

function addNewLineInTable(newTr) {
    var table = document.getElementById('alunos');
    var tbody = table.tBodies[0];
    tbody.appendChild(newTr);
}

function isAllFieldsValid() {
    var allFieldsValid = true;

    for (var i = 0; i < inputIds.length; i++) {
        var id = inputIds[i];
        var input = document.getElementById(id);
        if (input.value.trim() === '') {
            if (allFieldsValid) {
                input.focus();
            }
            allFieldsValid = false;
            showMessageFields(id);
        } else {
            hideMessageField(id);
        }
    }


    return allFieldsValid;
}

function showMessageFields(inputId) {
    var element = document.getElementById(inputId + 'Error'); // pega o input que deu erro
    element.className = element.className.replace('hide', '').trim(); //troca o hide por vazio.

}

function hideMessageField(inputId) {
    var element = document.getElementById(inputId + 'Error'); // pega o input que deu erro
    //serve para buscar algo
    if (element.className.indexOf('hide') === -1) {
        element.className = element.className + ' hide';  //atenção no espaço antes do hide, se nao nao some
    }
}
//pega todos os span
function getSpanErrorElement(inputId) {
    return document.getElementById(inputId + 'Error');

}

function clearFields() {
    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = '';
        if (i === 0) {
            input.focus();
        }
    }

}