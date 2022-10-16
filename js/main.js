/**
 * @author Dudi Iskandar
 * Javascript Web Dasar | Dicoding Submission
 */
const menuElement = document.getElementsByClassName('menu')[0];
const buttonScrollToTop = document.getElementById('scroll-to-top');
const toggleMenu = document.getElementsByClassName('toggle-menu')[0];

toggleMenu.addEventListener('click', () => {
    const isShowen = menuElement.classList.contains('show');
    if (isShowen) {
        menuElement.classList.remove('show');
    } else {
        menuElement.classList.add('show');
    }
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
        buttonScrollToTop.classList.add('show');
    } else {
        buttonScrollToTop.classList.remove('show');
    }
});

buttonScrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

function goToId(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' }, true);
}