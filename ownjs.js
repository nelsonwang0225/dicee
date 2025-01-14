var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".dice1").style.height = "100px";
document.querySelector(".dice1").style.width = "100px";
document.querySelector(".dice2").style.height = "100px";
document.querySelector(".dice2").style.width = "100px";

if (randomNumber1 === 1) {
    document.querySelector(".dice1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".dice1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".dice1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".dice1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".dice1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
    document.querySelector(".dice1").setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
    document.querySelector(".dice2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".dice2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector(".dice2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".dice2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".dice2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
    document.querySelector(".dice2").setAttribute("src", "images/dice6.png");
}


if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "Player 2 Wins";
} else if (randomNumber1 === randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "Draw";
}

