// nav bar et connection bouton
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
//controle
const form = document.querySelector('#form2');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (b) => {
    b.preventDefault();
    checkInputs();

});

function checkInputs() {
    //get the values from inputs
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    //controle du usernameValue
    if (verif_nom(nomValue) != '') {
        //add error class
        setErrorFor(nom, verif_nom(nomValue));
    } else {
        //add succes class
        setSuccessFor(nom);
    }
    //controle du emailValue
    if (verif_email(emailValue) != '') {
        //add error class
        setErrorFor(email, verif_email(emailValue));
    } else {
        //add succes class
        setSuccessFor(email);
    }
    if (verif_password(passwordValue) != '') {
        //add error class
        setErrorFor(password, verif_password(passwordValue));
    } else {
        //add succes class
        setSuccessFor(password);
    }
    if (password2Value === '') {
        //add error class
        setErrorFor(password2, '* Veuillez confirmer votre mot de passe ');
    } else if (password2Value !== passwordValue) {
        //add error class
        setErrorFor(password2, "* mot de passe ne correspond pas");
    } else {
        //add succes class
        setSuccessFor(password2);
    }
}




function setErrorFor(input, message) {
    const controleForm = input.parentElement; //  .controle
    const small = controleForm.querySelector('small');

    //add error message inside small
    small.innerText = message;
    controleForm.className = 'controle error';
}
//Dans le cas ou les données sont valide
function setSuccessFor(input) {
    const controleForm = input.parentElement;
    controleForm.className = 'controle success';
}

///fonction verif du nom
function verif_nom(nomValue) {
    var resultat = '';
    if (nomValue === '') {
        resultat = 'Le nom ne peut pas etre vide!';
    } else if (nomValue.length <= 4) {
        resultat = '* Le nom doit contenir au minimum 5 caractères!';
    } else if (nomValue.length > 14) {
        resultat = '* Le nom ne doit pas dépasser les 14 caractères!';
    } else if (alpha(nomValue) === 0) {
        resultat = '* Veuillez entrer un nom valide';
    }
    return resultat;
}
//tester si une chaine est alphabétique ou non
function alpha(ch) {
    ch = ch.toUpperCase();
    for (i = 0; i < ch.length; i++) {
        if (ch.charAt(i) < 'A' || ch.charAt(i) > 'Z') {
            i = 0;
            break;
        }
    }
    return i;
}
///fonction verif du email
function verif_email(emailValue) {
    var resultat = '';
    if (emailValue === '') {
        resultat = '* Le email ne peut pas être vide!';
    } else if (emailValue.length <= 4) {
        resultat = '* Le email comporter au moins 5 caractères!';
    } else if (emailValue.length > 40) {
        resultat = '* Le email ne doit pas dépasser 40 caractères!';
    } else if (emailValue.indexOf('@') < 1) {
        resultat = "* Email invalide    exemple:'abc@gamil.com'";
    } else if (emailValue.indexOf('.') < 1) {
        resultat = "* Email invalide    exemple:'abc@gamil.com'";
    }
    return resultat;
}
///fonction verif du password
function verif_password(passwordValue) {
    var resultat = '';
    if (passwordValue === '') {
        resultat = '* Veuillez fournir un mot de passe';
    } else if (passwordValue.length <= 4) {
        resultat = '* Le mot de passe doit comporter au moins 5 caractères!';
    } else if (passwordValue.length > 10) {
        resultat = '* Le mot de passe ne doit pas dépasser 10 caractères';
    }
    return resultat;
}



//eye
function MyFunction() {
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function MyFunction2() {
    var a = document.getElementById("password2");
    var b = document.getElementById("hide3");
    var c = document.getElementById("hide4");
    if (a.type === 'password') {
        a.type = "text";
        b.style.display = "block";
        c.style.display = "none";
    } else {
        a.type = "password";
        b.style.display = "none";
        c.style.display = "block";
    }
}


function MyFunction3() {
    var d = document.getElementById("password3");
    var e = document.getElementById("hide5");
    var f = document.getElementById("hide6");
    if (d.type === 'password') {
        d.type = "text";
        e.style.display = "block";
        f.style.display = "none";
    } else {
        d.type = "password";
        e.style.display = "none";
        f.style.display = "block";
    }
}


//incremental decremental
const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num');

update = (n) => {
    num.innerText = (n < 10 && n > 0) ? `${n}` : n;
}

let a = 1;

plus.addEventListener('click', () => update(++a));
minus.addEventListener('click', () => update(--a));



//upload file

const x = document.querySelector(".tire"),
    fileInput = x.querySelector(".file-input"),
    progressArea = document.querySelector(".progress-area"),
    upLodArea = document.querySelector(".upload-area");

x.addEventListener("click", () => {
    fileInput.click();
});
//steps
var formcondidature = document.getElementById("formcondidature");
var forminformation = document.getElementById("forminformation");
var formcv = document.getElementById("formcv");

var boutton1 = document.getElementById("boutton1");
var boutton2 = document.getElementById("boutton2");
var boutton3 = document.getElementById("boutton3");
var boutton4 = document.getElementById("boutton4");

var progress = document.getElementById("progress");

boutton1.onclick = function() {
    formcondidature.style.left = "-450px";
    forminformation.style.left = "40px";
    progress.style.width = "240px";
}
boutton2.onclick = function() {
    formcondidature.style.left = "40px";
    forminformation.style.left = "450px";
    progress.style.width = "120px";
}
boutton3.onclick = function() {
    forminformation.style.left = "-450px";
    formcv.style.left = "40px";
    progress.style.width = "360px";
}
boutton4.onclick = function() {
        forminformation.style.left = "40px";
        formcv.style.left = "450px";
        progress.style.width = "240px";
    }
    //merciiiiiiiiiiiiiiiiiii
const merci = document.querySelector("#m_container");
const envoyer = document.querySelector("#boutton5");

const employe = document.querySelector(".espaceem");

function mercii() {
    merci.style.display = "block";
    employe.style.display = "none";

}