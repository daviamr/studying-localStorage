const user_id = document.getElementById('user__id');
const password = document.getElementById('password');
const form_login = document.getElementById('form__login');

const dados_login = JSON.parse(localStorage.getItem('account'));

form_login.addEventListener('submit', (e) => {
    e.preventDefault();
    if (user_id.value === dados_login.Usuario && password.value === dados_login.Senha) {
        window.location.href = "../home.html"
    } else {
        alert('Alguma coisa deu ruim ai macaco');
    }

})