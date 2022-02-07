const login = document.querySelector('.link-login');
const signUp = document.querySelector('.link-sign-up');
const loginSection = document.querySelector('.login-section');
const signUpSection = document.querySelector('.sign-up-section');
signUp.addEventListener('click',() => {
    signUpSection.style.display = "block";
    loginSection.style.display = "none";
})

login.addEventListener('click', () => {
    signUpSection.style.display = "none"
    loginSection.style.display = "block"
} )