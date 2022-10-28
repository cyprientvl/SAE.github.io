let transi = document.querySelector("div.transiclose");

setTimeout(() =>{

	transi.classList.add("closetransi");

}, 500);


let btn1 = document.querySelector("div.frame-top p.one");
let btn2 = document.querySelector("div.frame-top p.two");
let content = document.querySelector("div.scroll");

btn1.addEventListener("click", ()=>{
	btn1.classList.add("open");
	btn2.classList.remove("open");
	content.classList.remove("move");
})

btn2.addEventListener("click", ()=>{
	btn2.classList.add("open");
	btn1.classList.remove("open");
	content.classList.add("move");
})