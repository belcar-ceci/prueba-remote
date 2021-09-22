function validate() {
const password = document.querySelector(".password").value;
const phone = document.querySelector('.phone').value;
const email = document.querySelector(".email").value;
const name = document.querySelector('.name').value;
const formulario =document.querySelector(".form");

formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    if(name.lenght == 0 || /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)){
        alert("Sólo se aceptan letras");
        return false;
    }else {
        return true;
    }
    
    

   if(email.lenght ==0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("El email es incorrecto");
        return false;
   }
   return true;
    
   if(password.lenght == 0 || /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/.test(password)){
       alert("debes rellenarlo todo")
       return false;
   }
   return true;

   if(phone.lenght == 0 || /^\d{7,14}$/.test(phone)){
    alert("debes rellenarlo todo")
    return false;
}
return true;
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