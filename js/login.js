function openconnecter(){
	document.querySelector(".connextion").classList.add("connextion-click");
	document.querySelector(".responsive").classList.add("display-none");
}

function openregister(){
	document.querySelector(".register").classList.add("connextion-click");
	document.querySelector(".responsive").classList.add("display-none");
}

function back() {

	document.querySelector(".connextion").classList.remove("connextion-click");
	document.querySelector(".register").classList.remove("connextion-click");
	document.querySelector(".responsive").classList.remove("display-none");

}
