let draiwer = document.querySelector('.draiwer')
let acentLink = document.querySelector('.draiwer-opn')
let draiwerOverlay = document.querySelector('.draiwer-overlay')
let headerMenu = document.querySelector('.header')
let btnShow = document.querySelectorAll('.btn-show')
let popupWin = document.querySelector('.popup')
let sectionActive = document.querySelectorAll('section')
let popupFiled = document.querySelectorAll('.popup-filed')
let arrowUp = document.querySelector('.arrow-up')

acentLink.addEventListener('click', openDraiwer)

let currentPad = window.innerWidth - document.documentElement.clientWidth + 'px'

// Open Left Menu

function openDraiwer() {
    draiwer.classList.toggle('open')
    document.body.classList.add('stop-scroll')
    document.body.style.paddingRight = currentPad
}

document.addEventListener('click', (event) => {
    if(event.target == draiwerOverlay) {
        draiwer.classList.remove('open')
        document.body.classList.remove('stop-scroll')
        document.body.style.paddingRight = null
    }

    if(event.target == popupWin) {
        popupWin.classList.remove('show')
        document.body.classList.remove('stop-scroll')
        document.body.style.paddingRight = null
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key == 'Escape') {
        draiwer.classList.remove('open')
        document.body.classList.remove('stop-scroll')
    }
})

// Menu + Active Link

document.addEventListener('scroll', () => {
    let correntY = window.scrollY
    menuBg(correntY)
    activeLink(correntY)
    showArrowUp(correntY)
})

function menuBg(correntY) {
    if(correntY > headerMenu.offsetHeight) {
        headerMenu.classList.add('menu-color')
    } else {
        headerMenu.classList.remove('menu-color')
    }
}

function activeLink(correntY) {
    sectionActive.forEach(item => {
        let currentId = item.getAttribute('id')
        if(correntY + 200 > item.offsetTop) {
            document.querySelector('.active-link').classList.remove('active-link')
            document.querySelector(`[href="#${currentId}"]`).classList.add('active-link')
        }
    })
}


function showArrowUp(correntY) {
    if(correntY > document.documentElement.clientHeight) {
        arrowUp.classList.add('show')
    }else {
        arrowUp.classList.remove('show')
    }
}

// Valid Forms

popupFiled.forEach(item => {
    item.addEventListener('blur', () => {

        item.nextElementSibling

        if(item.value == '') {
            showErrorMes(item, 'Поле не может быть пустым!')
        }else if(item.value.length < 2) {
            showErrorMes(item, 'Мало символов!')
        }
    })
})

function showErrorMes(item, error) {
    item.nextElementSibling.innerHTML = error

    item.addEventListener('input', () => {
        item.nextElementSibling.innerHTML = ''
    })
}

// Show popup

btnShow.forEach(item => {
    item.addEventListener('click', () => {
        popupWin.classList.add('show')
        headerMenu.classList.add('header-stop')
        document.body.classList.add('stop-scroll')
        document.body.style.paddingRight = currentPad
    })
})





