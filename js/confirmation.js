let main = document.getElementById('main');

let orderID = JSON.parse(localStorage.getItem('orderID'));

let totalHT = JSON.parse(localStorage.getItem('totalHT'));

displayOrdered();

function displayOrdered(){

    let text = document.createElement('div');
    text.innerHTML = 'Le numéro de votre commande est : ' + orderID;
    text.classList.add('text');
    main.appendChild(text);

    let text2 = document.createElement('div');
    text2.innerHTML = 'Le total de votre commande est de : ' + totalHT + ',00 €';
    text2.classList.add('text');
    main.appendChild(text2);

}