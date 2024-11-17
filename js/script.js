// Fonction pour changer le thème sur toutes les pages
function changeTheme() {
    var theme = document.getElementById("theme").value;
    var link = document.getElementById("theme-link");

    // Appliquer le thème choisi en modifiant le href du fichier CSS
    link.href = theme;
}

// Fonction pour obtenir la valeur d'un cookie par son nom
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiration dans X jours
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Lorsque la page est complètement chargée
window.onload = function() {
    var theme = getCookie("theme"); // Récupérer le thème du cookie
    if (theme) {
        // Si un thème est stocké dans le cookie, l'appliquer à la page
        document.getElementById("theme-link").href = theme;
    }
}

// Fonction pour changer le thème sur toutes les pages
function changeTheme() {
    var theme = document.getElementById("theme").value;
    var link = document.getElementById("theme-link");

    // Appliquer le thème choisi en modifiant le href du fichier CSS
    link.href = theme;

    // Enregistrer le thème dans un cookie pendant 1 an
    setCookie("theme", theme, 365);
}


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item img');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img src="" alt="Image agrandie">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeModal = modal.querySelector('.close');

    items.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = item.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
