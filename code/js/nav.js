document.getElementById('nav-icon4').addEventListener('click', () => {
    openmenu();
});

function openmenu(){
    document.getElementById('nav-icon4').classList.toggle('open');
    document.getElementsByTagName('header')[0].classList.toggle('openned');
}