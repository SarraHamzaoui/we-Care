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
//print
function imprimer(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
//qr
const f = document.querySelector(".parent"),
    qrInput = f.querySelector(".nomprenom"),
    generateBtn = f.querySelector("#generer"),
    qrImg = f.querySelector(".qr img");
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; //if the input is empty then return from here 
    // getting a QR code of user entered value using the qrserver
    //api and parssing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qrValue}`;
    f.classList.add("active");
});