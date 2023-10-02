
// var hamburguer = document.getElementById('hamburguer');
// var itensMenu = document.getElementById('itens_menu');


// hamburguer.addEventListener('click', aparecer);


// function aparecer() {
//     if (itens_menu.style.display == 'block') {
//         itensMenu.classList.remove('show');
//     } else {
//         itensMenu.classList.toggle('show');
//     }
// }

var hamburguer = document.getElementById('hamburguer');
var itensMenu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    if (itens_menu.style.display == 'block') {
        itensMenu.classList.remove('show');
    } else {
        itensMenu.classList.toggle('show');
    }
}