let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function addOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function addTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function addThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}



let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function addOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

function addTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function addThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}