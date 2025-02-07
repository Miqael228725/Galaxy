let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}


let button = document.querySelector('.arrow-next')
button.addEventListener("click", scrollDown)

function new_back() {
    let backg = document.querySelector('header')
    backg.style.background = "url(/uploads/2022/11/bg_space.png)"
    backg.style.backgroundSize = 'cover'
}

let new_theme = document.querySelector('.switch-theme-button')

new_theme.addEventListener('click', new_back)

function calc_flight(){
    let days = +document.querySelector('.days-input').value
    let clas = +document.querySelector('.submit-select').value
    let result = clas * days
    alert(result)
}

function transperent_calc() {
    start.style.backgroundColor = 'transparent'
}

function untransperent_calc() {
    start.style.backgroundColor = '#C2AB99'
}

function transperent_send() {
    end.style.backgroundColor = 'transparent'
}

function untransperent_send() {
    end.style.backgroundColor = '#C2AB99'
}

let start = document.querySelector('.submit-btn-calc')
let end = document.querySelector('.submit-btn-send')
start.addEventListener('click', calc_flight)
start.addEventListener('mouseenter', transperent_calc)
end.addEventListener('mouseenter', transperent_send)
start.addEventListener('mouseout', untransperent_calc)
end.addEventListener('mouseout', untransperent_send)



function mars(){
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}

let mars1 = document.querySelector('.mars1')

mars1.addEventListener('click', mars)
