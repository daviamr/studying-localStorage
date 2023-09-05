const user_id = document.getElementById('user__id');
const password = document.getElementById('password');
const form_login = document.getElementById('form__login');

const dados_login = JSON.parse(localStorage.getItem('accounts'));

form_login.addEventListener('submit', (e) => {
    e.preventDefault();

    if (dados_login != null) {
        dados_login.forEach(element => {

            if (user_id.value === element.usuario && password.value === element.senha) {
                window.location.href = "../home.html"
                return
            } else {
                alert('deu b.o mermao');
            }
        });
    }


})