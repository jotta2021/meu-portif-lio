const menu = document.querySelector('nav')
function activeScroll() {
  menu.classList.toggle('move', scrollY > 0)
}

window.addEventListener('scroll', activeScroll)
