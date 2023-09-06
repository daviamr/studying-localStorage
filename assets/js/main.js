const user = document.getElementById('user');
const email = document.getElementById('user__email');
const pass = document.getElementById('user__pass');
const form = document.getElementById('form');

const div = document.getElementById('divAccounts');

//const buscando a key 'accounts' no localStorage e fazendo a conversão do type caso tenha algo, caso não encontre nada ela cria um array vazio
const dados = JSON.parse(localStorage.getItem('accounts')) || [];
showAndUpdateElement(); //Verificando se há contas registradas, se sim, mostra na tela

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Condicional validando se os campos estão vazios
    if (user.value.trim() === '' || email.value.trim() === '' || pass.value.trim() === '') {
        alert('Campos vazios, preencha corretamente.');
    } else {
        const newUser = user.value; //Obtendo o valor do user.value
        const userExists = dados.some((element) => { //Buscando dentro do array 'dados' se já existe algum usuário com o valor do newUser
            return element.usuario === newUser //Buscando exatamente o mesmo valor(.usuario) do newUser
        });
        if (userExists) {
            alert('Usuário já cadastrado!');
        } else {
            createAccount();
            showAndUpdateElement();
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

function showAndUpdateElement() {
    dados.forEach(element => { //Para cada elemento
        div.style.display = 'flex';
        if (dados.length > 0) { //Verificando se há elementos dentro do array 'dados'
            createElement(element);
        }
    });
}

function createElement(element) {
    const newElement = document.createElement('span');
    newElement.classList.add('style');

    newElement.innerHTML = 'Usuário: ' + element.usuario + '<br>E-mail: ' + element.email + '<br>Senha: ' + element.senha;

    div.appendChild(newElement);
}
