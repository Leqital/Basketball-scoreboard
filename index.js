let homeCount = 0
let awayCount = 0
let homeZero = document.getElementById("Homezero")
let awayZero = document.getElementById("Guestzero")

function increment1() {
    homeCount += 1
    homeZero.textContent = homeCount
}

function increment2() {
    homeCount += 2
    homeZero.textContent = homeCount
}

function increment3() {
    homeCount += 3
    homeZero.textContent = homeCount
}

function increase1() {
    awayCount += 1
    awayZero.textContent = awayCount
}

function increase2() {
    awayCount += 2
    awayZero.textContent = awayCount
}

function increase3() {
    awayCount += 3
    awayZero.textContent = awayCount
}