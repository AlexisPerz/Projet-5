const queryString = window.location.search;

const id = new URLSearchParams(queryString).get('id');

let main = document.getElementById("main");

fetch("http://localhost:3000/api/teddies/"+id)
.then((res) =>{
	res.json().then(product=>{
		//On créer une div et on lui attribut une classe
		let div=document.createElement('DIV');
		div.classList.add("col-4");

		//On créer une balise a et on lui attribut un href et on récupère le nom du produit
		let a=document.createElement('A');
		a.href="produit.html?id="+product._id;
		a.innerHTML=product.name+'<br/>';

		//On créer une balise img et on récupère l'Url de l'image
		let img=document.createElement('img');
		img.src=product.imageUrl;

		//On créer une balise p et on récupère le prix 
		let p=document.createElement('P');
		p.innerHTML='Prix : '+product.price+'€';

		//On relis nos éléments à la div
		div.appendChild(a);
		div.appendChild(img);
		div.appendChild(p);

		//On relis notre div à la balise main
		main.appendChild(div);

	})
})

let carts = document.querySelectorAll(".panier");

let products = [
	{
		name: 'Norbert',
		tag: 'Ours 1',
		price: 2900,
		inCart: 0
	},
	{
		name: 'Arnold',
		tag: 'Ours 2',
		price: 3900,
		inCart: 0
	},
	{
		name: 'Lenny and Carl',
		tag: 'Ours 3',
		price: 5900,
		inCart: 0
	},
	{
		name: 'Gustav',
		tag: 'Ours 4',
		price: 4500,
		inCart: 0
	},
	{
		name: 'Garfunkel',
		tag: 'Ours 5',
		price: 5500,
		inCart: 0
	}
];

for (var i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumbers(products[i]);
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers) {
		document.querySelector('.nav-item span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	console.log("Le produit sélectionner est ", product);

	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.nav-item span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.nav-item span').textContent = 1;
	}
}

onLoadCartNumbers();