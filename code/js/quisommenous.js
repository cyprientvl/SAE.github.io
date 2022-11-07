let a = -400;
let count = 3;

function right() {

	if(count != 5){

		a = a - 400
		document.querySelector("div.content-img").style.transform = "translateX(" + a + "px)";
		count++;
		opacity();
	}

}

function left(){

	if(count != 1){
		a = a + 400;
		document.querySelector("div.content-img").style.transform = "translateX(" + a + "px)";
		count--;
		opacity();
	}
}

function opacity() {
	
	document.getElementById("imgs" + count).classList.add("onvisu");

	for (let i = 1; i <= 5; i++) {

		if(i != count){
			document.getElementById("imgs" + i).classList.remove("onvisu");
		}
		
	}

}

