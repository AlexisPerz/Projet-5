const queryString = window.location.search;

const id = new URLSearchParams(queryString).get('id');

let main = document.getElementById("main");

fetch("http://localhost:3000/api/teddies/"+id)
.then((res) =>{
	res.json().then(product=>{

		for (let i = 0; i < product.colors.length; i++) {
			Things[i]

			const select = document.createElement('select');
			
		}

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

let bouton = document.querySelectorAll(".bouton");

function addtocart() {

}

for (let i = 0; i < localStorage.length; i++) {
  let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
  products.push(data.id);
}

for (let i = 0; i < localStorage.length; i++) {
	localStorage[i].addEventListener("click", () => {
		cartNumbers(localStorage[i]);
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