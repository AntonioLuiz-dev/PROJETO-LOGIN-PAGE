const form = document.getElementById('loginForm');
const error = document.getElementById('error');
const email = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const button = document.querySelector('.btn');


email.addEventListener('input', () => {
const isValid = email.value.includes('@');
emailFeedback.textContent = isValid ? 'Email válido' : 'Digite um email válido';
});


togglePassword.addEventListener('click', () => {
password.type = password.type === 'password' ? 'text' : 'password';
});


form.addEventListener('submit', (event) => {
event.preventDefault();
button.classList.add('loading');


setTimeout(() => {
if (email.value === 'admin@portfolio.com' && password.value === '123456') {
alert('Login realizado com sucesso 🚀');
error.style.display = 'none';
} else {
error.style.display = 'block';
}
button.classList.remove('loading');
}, 1500);
});