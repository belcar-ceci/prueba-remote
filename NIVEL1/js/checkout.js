// Exercise 9

var password = document.querySelector(".password");//password
var phone = document.querySelector('.phone');//teléfono
var firtsName = document.querySelector('.name'); //nombre
var inputForm = document.querySelectorAll('.input'); // Acceder a input del html del fomrulario
var lastName = document.querySelector('#lastName'); //Apellidos
var email = document.querySelector('#email'); //Email

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  


/*https://content.breatheco.de/es/lesson/regex-tutorial-regular-expression-examples*/

function validate() {

var formulario = document.querySelector("form");

formulario.addEventListener('submit', (e) => {
    inputForm.forEach(element => {


    if (element.value == '') { // sin completar, no envia
        e.preventDefault(); 
        element.classList.add("invalid"); 
    }
    /* Al menos 3 carácters */
    else if (element.value.length < 3) {
        e.preventDefault(); 
        element.classList.add("invalid"); // añadir una clase
    } 
   
    /* Nombre contener solo letras*/
    if (/^[a-z ,.'-]+$/i.test(firtsName.value)) {
        e.preventDefault(); // 
        firtsName.classList.add("invalido"); // añadir una clase
    }
    /* Cognom debe contener solo letras*/
    if (/^[a-z ,.'-]+$/i.test(lastName.value)) {
        e.preventDefault(); 
        lastName.classList.add("invalido"); 
   }
   /* Teléfono solo números*/
    if (0 || /^\d{7,14}$/.test(phone.value)){
        e.preventDefault(); 
        phone.classList.add("invalido"); 
    }
    /* Password incluye letras y números*/
    if (0 || /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/.test(password.value)){
        e.preventDefault(); 
        password.classList.add("invalido"); 
    }
    /* Email formato de email @ /.com */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        e.preventDefault(); // Event anular envío de fomulario
        email.classList.add("invalido"); // añadir una clase
    }
}); //previene  envío de fomulario
    
});

}
