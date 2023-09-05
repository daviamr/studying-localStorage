const user = document.getElementById('user');
const email = document.getElementById('user__email');
const pass = document.getElementById('user__pass');
const passConfirm = document.getElementById('user__pass__confirm');
const form = document.getElementById('form');

//const buscando a key 'accounts' no localStorage e fazendo a conversão do type caso tenha algo, caso não encontre nada ela cria um array vazio
const dados = JSON.parse(localStorage.getItem('accounts')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Condicional validando se os campos estão vazios
    if (user.value.trim() === '' || email.value.trim() === '' || pass.value.trim() === '') {
        alert('Campos vazios, preencha corretamente.');
    } else {
        createAccount();
    }

    user.value = ''
    email.value = ''
    pass.value = ''
})

function createAccount() {
    const newId = dados.length;
    const newUser = user.value;
    const newEmail = email.value;
    const newPass = pass.value;

    const newAccount = {
        'id': newId,
        'usuario': newUser,
        'email': newEmail,
        'senha': newPass
    }

    //Dando um push da nova conta para dentro da array dados
    dados.push(newAccount);
    //Setando os itens da array dados no localStorage
    localStorage.setItem('accounts', JSON.stringify(dados));
}

pass.addEventListener('keyup', passValidate);
passConfirm.addEventListener('keyup', passValidate);

function passValidate() {
    if (pass.value != passConfirm.value) {
        pass.style.border = '1px solid #FF0000'
        passConfirm.style.border = '1px solid #FF0000'
    } else if (pass.value === passConfirm.value) {
        pass.style.border = 'none'
        passConfirm.style.border = 'none'
    }
}