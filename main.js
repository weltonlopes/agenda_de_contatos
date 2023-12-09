const form = document.getElementById('contact-form');
const names = [];
const telephones = [];
const nameInput = document.getElementById('name');
const telInput = document.getElementById('tel');

let lines = '';
let formIsValid = true;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    formIsValid = validateFullName() && validadeTelephone();

    if(formIsValid){
        addLine();
        updateContactTable();
    } else {
        alert("check the inputs, remember: you have to give full name and telephone have to be only numbers");
    }
})

function addLine() {
    if(names.includes(nameInput.value)){
        
        alert('this name is already in the list');
        
        /*
        
        if(confirm("You're about to overwrite your contact, proceed?")){
            let position = names.indexOf(nameInput.value);
            telephones[position] = telInput.value;
        } 
        
        */
    } else {
        names.push(nameInput.value);
        telephones.push(telInput.value);

        let line = '<tr>';
        line += `<td>${nameInput.value}</td>`;
        line += `<td>${telInput.value}</td>`;
        line += '</tr>';
        lines += line;
    }

    nameInput.value = '';
    telInput.value = '';
}

function updateContactTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}

function validateFullName() {
    let nameString = nameInput.value;
    let nameAndLastName = nameString.split(' ');

    return nameAndLastName.length > 1;
}

function validadeTelephone() {
    let telephoneNumber = telInput.value;
    return !isNaN(telephoneNumber);
}

function getTelByName(name) {
    if(names.includes(name)){
        let position = names.indexOf(name);
        return telephones[position];
    }
    else {
        return '';
    }
}

function searchName(){
    telInput.value = getTelByName(nameInput.value);
}