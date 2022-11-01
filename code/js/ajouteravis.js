function star(numero) {

	for (let i = 1; i <= 5; i++) {

		document.getElementById('etoile' + i).classList.remove('jaune');

	}

	for (let i = 1; i <= numero; i++) {

		document.getElementById('etoile' + i).classList.add('jaune');
		
	}
}