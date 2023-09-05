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
        const newUser = user.value; //Obtendo o valor do user.value
        const userExists = dados.find((element) => { //Buscando dentro do array 'dados' se já existe algum usuário com o valor do newUser
            return element.usuario === newUser //Buscando exatamente o mesmo valor(.usuario) do newUser
        });
        if (userExists) {
            alert('Usuário já cadastrado!');
        } else {
            createAccount();
        }
    }

    user.value = '';
    email.value = '';
    pass.value = '';
})


function createAccount() {
    const newId = dados.length; //Criando um id único para cada conta, através do length do array que contém as accounts
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
