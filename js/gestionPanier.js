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
    let findProduct = cart.find(p=>p.id==product.id && p.color==product.color);
    if (findProduct != undefined){
        findProduct.qty++;
    }
    else{
        cart.push(product);
    }
    saveBasket(cart);
}

function removeProduct(product){
    let cart = getBasket();
    let findProduct = cart.find(p=>p.id==product.id && p.color==product.color);
    if (findProduct.qty > 1){
        findProduct.qty--;
    }
    else{
        cart = cart.filter(p=>p.id != product.id || p.color != product.color);
    }
    saveBasket(cart);
}

function saveBasket(basket){
    localStorage.setItem('cart', JSON.stringify(basket));
}