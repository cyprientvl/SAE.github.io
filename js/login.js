function openconnecter(){
	document.querySelector("div.connextion").classList.add("connextion-click");
	document.querySelector("div.responsive").classList.add("display-none");
}

function openregister(){
	document.querySelector("div.register").classList.add("connextion-click");
	document.querySelector("div.responsive").classList.add("display-none");
}

function back() {

	document.querySelector("div.connextion").classList.remove("connextion-click");
	document.querySelector("div.register").classList.remove("connextion-click");
	document.querySelector("div.responsive").classList.remove("display-none");

}