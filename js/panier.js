//On écris dans le main
let main = document.getElementById('main');

//On récupère les éléments du localStorage

const cart = getBasket();

let totalHT=0;

let div=document.createElement('div');
div.classList.add('div');

//On créer un tableau avec une classe
let table=document.createElement('table');
table.classList.add('table');

//On créer l'entête des colonnes
let thead=document.createElement('thead');

//On créer les éléments des lignes
let tr=document.createElement('tr');

//On créer le nom de la première colonne
let th1=document.createElement('th');
th1.innerHTML="Nom";

//On créer le nom de la deuxième colonne
let th2=document.createElement('th');
th2.innerHTML="Couleur";

//On créer le nom de la troisième colonne
let th3=document.createElement('th');
th3.innerHTML="Quantité";

//On créer le nom de la quatrième colonne
let th4=document.createElement('th');
th4.innerHTML="Prix";

//On relis nos éléments th à notre tr
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);

//On relis notre tr à notre thead
thead.appendChild(tr);

//On relis notre thead à notre tableau
table.appendChild(thead);

//On relis notre div à notre main
main.appendChild(div);

//On relis notre tableau à notre div
div.appendChild(table);

//On créer un deuxième tableau
let table2=document.createElement('table');
table2.classList.add('table');

//On créer l'entête de la colonne
let thead2=document.createElement('thead');

//On créer l'élément de ligne
let tr2=document.createElement('tr');

//On relis notre tr2 à notre thead2
thead2.appendChild(tr2);

//On relis notre thead2 à notre deuxième tableau
table2.appendChild(thead2);

//On relis notre tableau à notre div
div.appendChild(table2);

//On créer une boucle forEach
cart.forEach(element=>{

	displayTable(element);

})

function displayTable(element){

	let tr3=document.createElement('tr');

	let td1=document.createElement('td');
	td1.innerHTML=element.nom;

	let td2=document.createElement('td');
	td2.innerHTML=element.color;

	let td3=document.createElement('td');
	td3.innerHTML=element.qty;

	let td4=document.createElement('td');
	td4.innerText=element.prix*element.qty/100+",00€";
	totalHT = totalHT + (parseInt(td4.innerText));

	tr3.appendChild(td1);
	tr3.appendChild(td2);
	tr3.appendChild(td3);
	tr3.appendChild(td4);

	table.appendChild(tr3);
}

//On créer le nom de la ligne
let th5=document.createElement('th');
th5.innerHTML="Total HT :"+" "+totalHT+"€";

//On relis notre th5 à notre tr2
tr2.appendChild(th5);

const form = document.getElementById("form1");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

form.addEventListener("submit",async function (e) {
	e.preventDefault();
	const contact = {
		firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
	}
	const products = [];
    for (let i = 0; i < cart.length; i++) {
        products.push(cart[i].id)
    }
	const data = {contact, products};
	
	if (this.reportValidity()){
		sendOrderToServer(data);
	}
})

function sendOrderToServer(data){
	
	fetch("http://localhost:3000/api/teddies/order", {

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    method: 'POST',
    body: JSON.stringify(data)
  	}).then(response => {
		response.json().then(response => {
			let orderID = JSON.stringify(response.orderId);
			localStorage.clear();
			// localStorage.setItem("orderID", orderID);
			// localStorage.setItem('totalHT', totalHT);
			location.assign("confirmation.html?orderId="+orderID+"&totalHT="+totalHT);
	})
	});
}