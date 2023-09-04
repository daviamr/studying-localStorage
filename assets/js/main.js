const user = document.getElementById('user');
const email = document.getElementById('user__email');
const pass = document.getElementById('user__pass');
const passConfirm = document.getElementById('user__pass__confirm');
const button = document.getElementById('s__button');
const form = document.getElementById('form');

const dados = JSON.parse(localStorage.getItem('account'));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Condicional validando se os campos estão vazios
    if (user.value.trim() === '' || email.value.trim() === '' || pass.value.trim() === '') {
        alert('Campos vazios, preencha corretamente.');
    } else {
        newAccount(user.value, email.value, pass.value);
        user.value = ''
        email.value = ''
        pass.value = ''
        enviaDados();
    }
})

function newAccount(user, email, pass) {
    const acc = {
        'Usuario': user,
        'E-mail': email,
        'Senha': pass
    }

    localStorage.setItem('account', JSON.stringify(acc));
}

function enviaDados() {
    localStorage.getItem('account');
}