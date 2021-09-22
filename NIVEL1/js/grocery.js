//console.log('👩‍🔬 ');


const btnAdd = document.getElementsByClassName('btn-primary')
for (let i=0; i<btnAdd.length; i++){
    btnAdd[i].addEventListener('click', addToCart)
}

var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
    ];

var cartList = [];
var cart = [];
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
    
    for(let i=0; i<products.length; i++){
        if(id===i){
            cartList.push(products[i]);
        }
    }
    
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;//vaciar productos del carrito
}

// Exercise 3
function calculateSubtotals(id) {
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
function calculateTotal(id) {
    // Calculate total price of the cart either using the "cartList" array
    for(var item in carList){
        total += cartList[item].price;
    }
    /*for(let i=0; i<cartList.length; i++){
        if(products[i].cart){
            total+=products[i].total;
        }
    }
    return calculateTotal*/
    for(var item in subtotal){
        total -= subtotal[item].discount;
    }
}


// Exercise 5
function applyPromotionsSubtotals() {
     //Iniciar variables ( valor 0, por defecto )
     var discountOil = 0;
     var discountMescla = 0;
     
     //1- Buscar cantidad de aceites
     var arrayOil = cartList.filter(product => product.name == 'cooking oil');
     var quantitatOil = arrayOil.length;
     console.log("Quantitat Oil: " + quantitatOil)
 
     //2- Buscar cantidad mezcla
     var arrayMescla = cartList.filter(product => product.name == 'Instant cupcake mixture');
     var quantitatMescla = arrayMescla.length;   
     console.log("Quantitat Mescla: "+ quantitatMescla)
 
     //3- Si compra más de 3 oils el price será 10 eur
     if (quantitatOil>3){
         var discountOil = ((0.5)*quantitatOil);
 
     }
     //4- Si compra más de 10 mescla el price será = (price/3)*2
     if (quantitatMezcla>10){
         var priceMescla = products[2].price;
         var discountMesclaUnitari = (priceMezcla/3);
         var discountMescla = (discountMesclaUnitari * quantitatMescla);
 
     }
     subtotal.grocery.discount = discountOil + discountMescla;
     console.log("Descuento Oil: " + discountOil + ". Descuento mescla: " + discountMescla);
 }
 


// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   

        // 1- item en la lista nueva
        for (i = 0; i<cartList.length; i++) {
            var producte = cartList[i];
            var item = cart.find( producteCart => producteCart.name === producte.name);
            // 2- Si no existeix crear-lo.
            if (item == null) {
                item = producte;
                item.cantidad = 1;
                cart.push(item);
            }
                // 2- al tener el item, aumentar la cantidad.
            else {
                item.cantidad = item.cantidad + 1 ;
            }
               
            item.subtotal = item.price * item.quantity ;
            item.subtotalWithDiscount = 0;
        }
    
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // Promoción cantidad oil
    var indexCartOil = cart.findIndex(products => products.name === 'cooking oil');
    if (indexCartOil != -1 && cart[indexCartOil].quantity > 3) {
        cart[indexCartOil].subtotalWithDiscount = ((0.5)*cart[indexCartOil].quantity);
    }

    // Promoción cantidad mescla
    var indexCartMescla = cart.findIndex(products => products.name === 'Instant cupcake mixture');
    if (indexCartMescla != -1 && cart[indexCartMescla].quantity > 10) {
        //Inicializació de variables per aquest apartat
        var priceMescla = products[2].price;
        var discountMesclaUnitari = (priceMescla/3);
        cart[indexCartMescla].subtotalWithDiscount = discountMesclaUnitari * cart[indexCartMescla].quantity ;
    }
}
// Exercise 8
function addToCart (event) {
    let btn = event.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[1].innerText
    let itemImage = btn_grandparent.children[0].src


    let itemContainer = document.createElement('div')
  

    console.log(itemName)
    console.log(itemPrice)
    console.log(itemImage)
}
// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}