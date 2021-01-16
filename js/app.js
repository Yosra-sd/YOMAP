 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".navbuttons");
    console.log(burger)

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide(); 


/**if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    document.getElementsByClassName('burger')[0].addEventListener('click', navSlide)
}

function navSlide(){
    const nav = document.getElementsByClassName('navbuttons')[0];
    console.log(nav)
    var list = nav.classList;
    if (list.contains('nav-active')){
        list.remove('nav-active')
    } else {
        list.add('nav-active')
    }
}**/