let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    const seconnecter = document.querySelector(".connexion");
    const creation = document.querySelector(".creer");

    document.querySelector("#liendecreaction").addEventListener("click", e => {
        e.preventDefault();
        seconnecter.classList.add("connexion");
        creation.classList.remove("connexion");
    });

    document.querySelector("#lienconnection").addEventListener("click", e => {
        e.preventDefault();
        seconnecter.classList.remove("connexion");
        creation.classList.add("connexion");
    });

});