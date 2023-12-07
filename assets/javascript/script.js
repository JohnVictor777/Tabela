// NOVA LINHA

function addToTable() {

    // RECEBER DADOS
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var work = document.getElementById('work').value;
    var table = document.getElementById("myTable");


    // CALCULO DE TAMANHO
    var tableSize = table.rows.length;

    // ADICIONAR LINHA
    var row = table.insertRow(tableSize);

    // CELULAS DE LINHA
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    // ADICIONANDO ID
    row.id = tableSize;

    // REMOVER LINHA
    var btnCode = " <button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    // PREENCHER LINHA
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;

    // LIMPAR LINHA
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('work').value = "";


    // IMPEDE RELOAD DA PÁGINA
    return false;
}

// REMOVER UMA LINHA
function removeToTable(id) {

    // PEGAR ID
    var row = id.parentNode.parentNode.id;
    // PREENCHER LINHA

    row = document.getElementById(row);
    // REMOVER LINHA
    row.parentNode.removeChild(row);


    // IMPEDE RELOAD DA PÁGINA
    return false;
}
