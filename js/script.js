feather.replace();

// Toogle Class Active
const navbarNav = document.querySelector('.navbar-nav');

const hamburger = document.querySelector('#hamburger');
// ketika hamburger menu d klik
hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
}

// Klik di luar Hamburger menu
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})