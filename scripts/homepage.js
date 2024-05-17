// Initialisation du carrousel Swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Gestion du menu burger
document.querySelector('.menu-burger').addEventListener('click', function() {
    var profileMenu = document.querySelector('.profile-menu');
    profileMenu.style.display = profileMenu.style.display === 'none' || profileMenu.style.display === '' ? 'flex' : 'none';
});

// Gestion des boutons de flèche
document.querySelector('.arrow-up').addEventListener('click', function() {
    // Code pour afficher la tuile précédente
});

document.querySelector('.arrow-down').addEventListener('click', function() {
    // Code pour afficher la tuile suivante
});

// Gestion de l'ajout à la liste "Monsak"
document.querySelector('.add-to-list-button').addEventListener('click', function() {
    // Code pour ajouter le sac à la liste "Monsak"
});
