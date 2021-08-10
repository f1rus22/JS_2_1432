let nameUser = document.getElementById('name');
let alertNameUser = document.querySelector('.alertName');
let emailUser = document.getElementById('email');
let alertEmailUser = document.querySelector('.alertEmail');
let phoneUser = document.getElementById('phone');
let alertPhoneUser = document.querySelector('.alertPhoneNumber');
let messageUser = document.getElementById('message');
let alertMessageUser = document.querySelector('.alertMessage');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (!/[а-яa-z]{2,20}/.test(nameUser.value)) {
        alertNameUser.style.display = 'block';
        nameUser.style.borderColor = 'red';
    } else {
        alertNameUser.style.display = 'none';
        nameUser.style.borderColor = 'green';
    }
});


button.addEventListener('click', function () {
    if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phoneUser.value)) {
        alertPhoneUser.style.display = 'block';
        phoneUser.style.borderColor = 'red';
    } else {
        alertPhoneUser.style.display = 'none';
        phoneUser.style.borderColor = 'green';
    }
});

button.addEventListener('click', function () {
    if (!/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(emailUser.value)) {
        alertEmailUser.style.display = 'block';
        emailUser.style.borderColor = 'red';
    } else {
        alertEmailUser.style.display = 'none';
        emailUser.style.borderColor = 'green';
    }
});


button.addEventListener('click', function () {
    if (!/[а-яА-Яa-zA-Z0-9\s/]{20,140}/.test(messageUser.value)) {
        alertMessageUser.style.display = 'block';
        messageUser.style.borderColor = 'red';
    } else {
        alertMessageUser.style.display = 'none';
        messageUser.style.borderColor = 'green';
    }
});
