var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // imagesdice1.png - imagesdice6.png

var image1 = document.querySelectorAll("img")[0]; // first img element in the document

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;// 1-6

var randomeImageSource2 = "images/dice" + randomNumber2 + ".png"; // imagesdice1.png - imagesdice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);

if (randomNumber1> randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML ="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw"
}