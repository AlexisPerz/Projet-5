let main = document.getElementById("main");

fetch("http://localhost:3000/api/teddies")
.then((res) => res.json())
.then(function(products) {
	console.log(products);
	for(const product of products) {
		console.log(product.name);
		console.log(product.imageUrl);
		console.log(product.colors);
		console.log(product._id);
		console.log(product.price);
		console.log(product.description);
	}
});