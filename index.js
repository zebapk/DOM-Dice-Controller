var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randonImageNumber1 = "dice" + randomNumber1 + ".png";
var randumImageSource1 = "images/" + randonImageNumber1;
document.querySelectorAll("img")[0].setAttribute("src", randumImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randonImageNumber2 = "dice" + randomNumber2 + ".png";
var randumImageSource2 = "images/" + randonImageNumber2;
var img = document.querySelectorAll("img")[1];
img.setAttribute("src", randumImageSource2);

if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
}
