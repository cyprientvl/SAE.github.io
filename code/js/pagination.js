function change(numero){
	document.getElementById('lien' + numero).classList.add('actif');

	for(let i = 1; i < 5; i++){
		if (i != numero){
			document.getElementById('lien' + i).classList.remove('actif');
		}
	}
}