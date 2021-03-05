let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let contenedor = document.createElement("div");
	contenedor.style.background = "Yellow";
	contenedor.innerHTML = "Hello World";
	document.body.appendChild(contenedor);
});
