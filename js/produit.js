// Récupére le produit dans le localStorage
const product = JSON.parse(localStorage.getItem("product"));
document.getElementById("main").innerHTML = product.name;