var images = [1, 2, 3, 4, 5, 6];

//Left Dice
var random1 = images[Math.floor(Math.random() * images.length)] ;
var source1 = "images/dice" + random1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", source1);

// Right Dice
var random2 = images[Math.floor(Math.random() * images.length)] ;
var source2 = "images/dice" + random2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", source2);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else if (random1 == random2) {
    document.querySelector("h1").innerHTML = "Draw";
}