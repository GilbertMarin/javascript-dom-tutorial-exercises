let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let mylist = document.querySelector("#myList");
	let list = document.createElement("li");
	list.innerHTML = "Fourth element";
	mylist.appendChild(list);
});
