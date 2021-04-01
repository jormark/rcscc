var score = 0;
var startScreen = document.querySelector('.startScreen');
var funSplash = document.querySelector('.funSplash');
var compSplash = document.querySelector('.compSplash');
var funButton = document.querySelector('.fun');
var compButton = document.querySelector('.comp');
var mainScreen = document.querySelector('.mainScreen');
var funScreen = document.querySelector('.funScreen');
var compScreen = document.querySelector('.compScreen');
var scoreCard = document.querySelector('.scoreCard');

function changeScore(){
    var displayScore = document.querySelectorAll('.score');
    for (var i=0; i < displayScore.length; i++) {
        displayScore[i].innerHTML = score;
    }
};