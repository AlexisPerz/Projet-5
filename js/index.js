//On créer une variable et on demande d'écrire dans la balise main
let main = document.getElementById("main");

// Stocke le produit dans le local storage et redirige vers la page produit.html
function displayProduct(product) {
	localStorage.setItem('product', JSON.stringify(product));
	document.location = "produit.html";
}

//On récupère les éléments du localhost et on créer une boucle for pour intégrer nos éléments
fetch("http://localhost:3000/api/teddies")
.then((res) => res.json())
.then(function(products) {
	for(let product of products) {

		//On créer une div et on lui attribut une classe
		let div=document.createElement('DIV');
		div.classList.add("col-4");

		//On créer une balise a et on lui attribut un href et on récupère le nom du produit
		let a=document.createElement('A');
		a.href="produit.html";
		a.innerHTML=product.name+'<br/>';

		a.addEventListener('click', (event) => {
			event.preventDefault(); // Empêche le liens de rediriger vers une autre page
		    displayProduct(product); // Appel la fonction qui va stocker le produit 
		});

		//On créer une balise img et on récupère l'Url de l'image
		let img=document.createElement('img');
		img.src=product.imageUrl;

		//On créer une balise p et on récupère le prix 
		let p=document.createElement('P');
		p.innerHTML='Prix : '+product.price+'  €';

		//On relis nos éléments à la div
		div.appendChild(a);
		div.appendChild(img);
		div.appendChild(p);

		//On relis notre div à la balise main
		main.appendChild(div);
	}
})