const queryString = window.location.search;

const id = new URLSearchParams(queryString).get('id');

let main = document.getElementById("main");

fetch("http://localhost:3000/api/teddies/"+id)
.then((res) =>{
	res.json().then(product=>{

		displayProduct(product);

		displayColor(product);

	})
})

function displayProduct(product){
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
}

function displayColor(product){
	let color=document.getElementById('color');
	product.colors.forEach(element => {
		let option=document.createElement('OPTION');
		option.innerHTML=element;
		color.appendChild(option);
	})
}