// Exercise 11
// Move this variable to a json file and load the data in this js
//console.log('HOLA');
/*const btnAdd = document.querySelectorAll('.btn')
//console.log(btnAdd);
//const products = []
btnAdd.forEach(btnAdd => {
    btnAdd.addEventListener('click', addToCart);
});*/

var cartList = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
  // 1. Loop for to the array products to get the item to add to cart
   // 2. Add found product to the cartList array
function addToCartList(id) {
    var cartList = [];
    for(let i=0; i<products.length; i++){
        if(id===i){
            cartList.push(products[i]);
        }
    }
    
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for (let i=0; i<cartList.length; i++){
        switch(cartList[i].type){
            case 'grocery': 
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
            console.log(subtotal.grocery);
            case 'beauty': 
            subtotal.beauty.value = subtotal.beauty.value + + cartList[i].price;
            console.log(subtotal.beauty);
            case 'clothes': 
            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
            console.log(subtotal.clothes);

            default: 
                break;
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    var cart = [];
    for(let i=0; i<cartList.length; i++){
        if(products[i].cart){
            total+=products[i].total;
        }
    }
    return calculateTotal
}


// Exercise 5
function applyPromotionsSubtotals() {

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
/*function addToCart(event){
    const cardBtn = event.target;
    //console.log(buttton);
    const card = cardBtn.closest('.card');
    //console.log(card);
    const cardTitle = card.querySelector('.card-title').textContent;
    //console.log(cardTitle);
    const cardPrice = card.querySelector('.card-text').textContent;
    const cardImage = card.querySelector('.grocery-img').src;
    //console.log(cardTitle, cardPrice, cardImage );

    addCardToShop(cardTitle, cardPrice, cardImage);
}

function addCardToShop(cardTitle, cardPrice, cardImage){
    console.log(cardTitle, cardPrice, cardImage);

}*/
/*function addToCart(id){
  const btnAdd="id";
  document.getElementsByClassName("btn").innerHTML = btnAdd;
  console.log('este es un botón', id);
  /*const btnAdd = document.querySelectorAll('.btn')
    console.log('este boton', id);*/
    /*for(let i=0; i<products; i++){
        addToCart();
    }
    
}*/


// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}