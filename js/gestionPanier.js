function getBasket(){

    const setCart = localStorage.getItem("cart");
    

    if ( setCart != null ){
        return JSON.parse(setCart);
    }
    else{
        return [];
    }

}

function addProduct(product){
    let cart = getBasket();
    cart.push(product);
    saveBasket(cart);
}

function removeProduct(product){
    
}

function saveBasket(basket){
    localStorage.setItem('cart', JSON.stringify(basket));
}