function validate () {
const password = document.querySelector(".password");
const phone = document.querySelector('.phone');
const email = document.querySelector(".email");
const nombre = document.querySelector('.name');
const formulario =document.querySelector(".form");

formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(nombre.value.length<6){
        alert("Nombre muy corto");
        return false;
    }
    //console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        alert("El email es incorrecto");
        return false;
    }
    if(password.value.length<8){
        alert("El password es incorrecto");
        return false;
    }
    if(phone.value.length<10){
        alert("El telefono es incorrecto");
        return false;
    }
   
})
}




// Get the input fields
/*var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
}*/