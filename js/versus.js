let transi = document.querySelector("div.transipage");
let btn = document.querySelector("div.comparer")

btn.addEventListener("click", () =>{
	transi.classList.add("opentransi");

	setTimeout(() =>{

		location.replace("produitversus.html")

	}, 500);

})