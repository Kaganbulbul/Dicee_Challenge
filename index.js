
var randomNumber1 = "images/dice" + Math.floor(Math.random() * 7) + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomNumber1);



var randomNumber2 = "images/dice" + Math.floor(Math.random() *7) + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";       
    }
else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Won"
    }
else {
        document.querySelector("h1").innerHTML = "Equal, Try Again!"
    }