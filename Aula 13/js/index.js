var lineIndexToEdit = -1;
var indexEditingStudent = null;
var inputIds = ['name', 'email', 'cpf'];
var students = [];

start();

function start() {
    /*var btn = document.getElementById('addBtn');
    btn.onclick = function () {
        addNewAluno();
    };*/

    $('#addBtn').click(function(){
        addNewAluno();
    });
}

function addNewAluno() {
    if (isAllFieldsValid()) {
        var student = getStudentObjetct();

        var index = getStudentIndexByCPF(student.cpf);
        if (index > -1 && index !== indexEditingStudent){
            alert('CPF Inválido! Número de CPF repetido!'); // validando cpfs
            return;
        }

        if (lineIndexToEdit === -1) {
            students.push(student);

        } else {
            updateStudent(student);
        }

        saveInLocalStorage();
        clearTableData();
        populateTableData();
        clearFields();
        lineIndexToEdit = -1;
        /*
        if (lineIndexToEdit === -1) {
            removeEmptyLine();
            var newLine = createNewLine();
            addNewLineInTable(newLine);
        } else {
            editExistLine();
        }
        */
    }
}

function getStudentObjetct() {
    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');
    var inputCpf = document.getElementById('cpf');
    var timestamp = (new Date()).getTime();

    return {
        name: inputName.value,
        email: inputEmail.value,
        cpf: inputCpf.value
    };
}

function clearTableData() {
    var tbody = getTbody();
    tbody.innerHTML = '';
}

function populateTableData() {
    var tbody = getTbody();

    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement('tr');
        var student = students[i];
        tr.appendChild(createColumn(student.name));
        tr.appendChild(createColumn(student.email));
        tr.appendChild(createColumn(student.cpf));
        createButtonColumns(tr);
        tbody.appendChild(tr);
    }


}

function editExistLine() {
    var tbody = getTbody();
    var tr = tbody.children[lineIndexToEdit - 1];


    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        tr.children[i].innerHTML = input.value;
    }
}

function createNewLine() {

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

    td.appendChild(input);
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

    var cpf = tr.children[2].innerHTML;
    indexEditingStudent = getStudentIndexByCPF(cpf); //

}

function removeLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var cpf = tr.children[2].innerHTML;
    var tbody = getTbody();
    tbody.removeChild(tr);
    removeStudentFromArray(cpf);
    checkEmptyTable();
}

function createColumn(content) {
    var td = document.createElement('td');
    var textNode = document.createTextNode(content);
    td.appendChild(textNode);
    return td;
}

function addNewLineInTable(newTr) {
    var tbody = getTbody();
    if (tbody.children.length % 2 === 0) {
        newTr.style.backgroundColor = 'lightGray';
    } else {
        newTr.style.backgroundColor = 'darkGray';
    }
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
            showMessageField(id);
        } else {
            hideMessageField(id);
        }
    }

    return allFieldsValid;
}

function showMessageField(inputId) {
    var element = getSpanErrorElement(inputId);
    element.className = element.className.replace('hide', '').trim();
}

function hideMessageField(inputId) {
    var element = getSpanErrorElement(inputId);
    if (element.className.indexOf('hide') === -1) {
        element.className = element.className + ' hide';
    }
}

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

function removeEmptyLine() {
    var line = document.getElementById('emptyLine');
    if (line) {
        var tbody = getTbody();
        tbody.removeChild(line);
    }
}

function getTbody() {
    var table = document.getElementById('alunos');
    return table.tBodies[0];
}

function checkEmptyTable() {
    var tbody = getTbody();
    if (tbody.children.length === 0) {
        var td = document.createElement('td');
        td.colSpan = 5;
        var textNode = document.createTextNode('Nenhum aluno cadastrado ainda!');
        td.appendChild(textNode);
        var tr = document.createElement('tr');
        tr.id = 'emptyLine';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

function removeStudentFromArray(cpf) {
    var index = getStudentIndexByCPF(cpf);
    students.splice(index, 1); // remover um elemento do array
    saveInLocalStorage();

}

function updateStudent(student) {
    var oldStudent = students[indexEditingStudent];

    oldStudent.name = student.name;
    oldStudent.email = student.email;
    oldStudent.cpf = student.cpf;
}

function getStudentIndexByCPF(cpf) {
    return index = students.findIndex(function (element) {
        return element.cpf == cpf;
    });
}

function saveInLocalStorage() {
    var studentsToBeSave = JSON.stringify(students);
    localStorage.setItem('STUDENTS', studentsToBeSave);
}

window.onload = function () {
    loadDataFromAPI();
};

function loadDataFromAPI() { // pega os itens da tabela ejoga na tabela.
   $.get("https://pacific-wave-50441.herokuapp.com/api/aluno", function (data){
       console.log(data);
       students = data;
       clearTableData();
       populateTableData();
   });
}