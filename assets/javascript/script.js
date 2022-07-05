var playerOne = document.getElementById("RPSinput");
const playerTwo = ["rock", "paper", "scissor"];
var oneWins = 1;
var oneLosses = 1;
var oneTies = 1;

//functions to console log results
function rockVsPaper() {
    console.log("Paper covers rock!");
    return;
}
function rockVsScissors() {
    console.log("Rock smashes scissors!");
    return;
}
function scissorsVsPaper() {
    console.log("Scissors cut paper!");
    return;
}
function tie() {
    console.log("You tied!");
    return;
}

var test = document.getElementById('RPSplay');
test.onclick = function() {
    //move variable pulls random answer from playerTwo array
    var move = playerTwo[Math.floor(Math.random()*playerTwo.length)];

    //changes the h2 tag to list player 2's random answer from move
    document.getElementById("playerTwoTxt").innerHTML = "Player two chooses: " + move + "!";

    //pull the text from text area
    let playerOneInput = document.getElementById('RPSinput').value;

    //response for player 1 as Rock
   if(playerOneInput == "rock") {
        console.log(playerOneInput + " vs " + move);

        if(move == "rock") {
            tie();

            document.getElementById("ties").innerHTML = "player one Ties: " + (oneTies ++);
        } else if(move == "paper") {
            rockVsPaper();
            
            document.getElementById("losses").innerHTML = "player one Losses: " + (oneLosses ++);

        } else {
            rockVsScissors();

            document.getElementById("wins").innerHTML = "player one Wins: " + (oneWins ++);
        }
    } 
    //response for player 1 as paper
    else if(playerOneInput == "paper") {
        console.log(playerOneInput + " vs " + move);

        if(move == "paper") {
            tie();

            document.getElementById("ties").innerHTML = "player one Ties: " + (oneTies ++);
        } else if(move == "rock") {
            rockVsPaper();

            document.getElementById("wins").innerHTML = "player one Wins: " + (oneWins ++);
        } else {
            scissorsVsPaper();

            document.getElementById("losses").innerHTML = "player one Losses: " + (oneLosses ++);
        }
    } 
    //response for player 1 as scissor
    else if(playerOneInput == "scissors") {
        console.log(playerOneInput + " vs " + move);

        if(move == "paper") {
            scissorsVsPaper();

            document.getElementById("wins").innerHTML = "player one Wins: " + (oneWins ++);
        } else if(move == "rock") {
            rockVsScissors();

            document.getElementById("losses").innerHTML = "player one Losses: " + (oneLosses ++);
        } else {
            tie();

            document.getElementById("ties").innerHTML = "player one Ties: " + (oneTies ++);
        }
    }
}