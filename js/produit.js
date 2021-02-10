const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

let main = document.getElementById("main");

fetch("http://localhost:3000/api/teddies/"+id)
.then((res) =>{
	res.json().then(product=>{

		displayProduct(product);
		displayColor(product);
		addProductInCart(product)
	})
})

function displayProduct(product){

		//On créer une balise img et on récupère l'Url de l'image
		let img=document.createElement('img');
		img.src=product.imageUrl;
		img.classList.add("imageproduit");

		//On relis notre image au main
		main.appendChild(img);

		//On créer une div et on lui attribut une classe
		let div=document.createElement('DIV');
		div.classList.add("carte");

		//On créer une balise p et on récupère le nom du produit
		let p=document.createElement('P');
		p.innerHTML=product.name;
		p.classList.add("nomproduit");

		//On créer une balise p et on récupère le prix 
		let p2=document.createElement('P');
		p2.innerHTML=product.price/100+",00€";
		p2.classList.add("prixproduit");

		//On créer une balise p et on récupère la description du produit
		let p3=document.createElement('P');
		p3.innerHTML=product.description;
		p3.classList.add("descriptionproduit");

		//On relis nos éléments à la div
		div.appendChild(p);
		div.appendChild(p2);
		div.appendChild(p3);

		//On relis notre div à la balise main
		main.appendChild(div);
}

function displayColor(product){

	let color=document.getElementById('color');
	product.colors.forEach(element => {

	let option=document.createElement('option');
	option.innerHTML=element;
	color.appendChild(option);
	})
}

function addProductInCart(product){

	const form = document.getElementById("form");
		form.addEventListener('submit', function (e) {
		e.preventDefault();
		const selectColors = document.getElementById('color');
			let teddiesorder={
				'id':product._id,
				'nom':product.name,
				'color':selectColors.value,
				'prix':product.price,
				'qty':1
			}
			addProduct(teddiesorder);
		})
}