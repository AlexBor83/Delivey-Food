// управление modal-auth

const buttonAuth = document.querySelector('.button-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const logIn = (user) => {
  modalAuth.style.display = 'none';
  buttonAuth.style.display = 'none';
  userName.style.display = 'block';
  buttonOut.style.display = 'flex';
  userName.textContent = user.login;
};

const logOut = () => {
  buttonAuth.style.display = 'flex';
  userName.style.display = 'none';
  buttonOut.style.display = 'none';
  userName.textContent = '';
  localStorage.removeItem('user');
};

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});

buttonOut.addEventListener('click', () => {
  logOut();
});

logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!inputLogin.value) {
    alert('Введите логин');
  } else {
    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    };

    localStorage.setItem('user', JSON.stringify(user));
    logIn(user);

    console.log(user);
  }
});

if (localStorage.getItem('user')) {
  logIn(JSON.parse(localStorage.getItem('user')));
}
