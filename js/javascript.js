let toTop = document.querySelector('.to-top');
let allDiv = document.querySelectorAll('div');
let nav = document.querySelector('nav');

function check() {

    if (window.scrollY > 640) {
        toTop.classList.remove('hide');
        nav.classList.add('fixed');
    } else if (window.scrollY <= 640) {
        toTop.classList.add('hide');
        nav.classList.remove('fixed');
    }

    //add overflow:hidden in all divs which has child contains "wow"
    for (let i = 0; i < allDiv.length; i++) {
        if (allDiv[i].classList.contains('wow')) {
            allDiv[i].parentElement.style.overflow = 'hidden';
        }
    }


}
check();
window.onscroll = function() {
    check();
}
toTop.onclick = function() {
    window.scrollTo(0, 0);
}