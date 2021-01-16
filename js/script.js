if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var heartButton = document.getElementsByClassName('like')
    for (var i = 0; i< heartButton.length; i++) {
        var button = heartButton[i]
        button.addEventListener('click', LikeHeart)
    }

    var hamburger = document.getElementById('hamburger-menu')
    hamburger.addEventListener('click', toggleMenu)

}

function LikeHeart(event) {
    // preventDefault ne laisse pas la page monter
    event.preventDefault()
    var list = event.target.classList;
    if (list.contains('liked')){
        list.remove('liked')
    } else {
        list.add('liked')
    }
}

function toggleMenu(event) {
    console.log(event.target)
    document.getElementById('hamburger-menu').classList.toggle('is-active')
    document.getElementsByClassName('menu')[0].classList.toggle('menu-active')
}



