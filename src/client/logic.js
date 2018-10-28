var playerXWins = 0;
var playerOWins = 0;
var numberOfDraws = 0;
var gameOver = false;
var turnCounter = 0;

function  playAgain(){
    turnCounter = 0;
    gameOver = false;
    for(var i = 1; i < 10; i++){
      document.getElementById(i.toString()).innerText = '';
    }
    document.getElementById(currentPlayer).innerHTML = "Player X, it's your turn!";
  }

  function whosTurn(){
    if(turnCounter %2 == 0){
      return 'X';
    }
    else{
      return 'O';
    }
  }

  function whereToPlace(posistionId){
    if(!gameOver){
      var where = document.getElementById(posistionId);
      if(where.innerText == ''){
        var who = whosTurn();
        turnCounter++;
        where.innerText = who;
        var whosNext = whosTurn();
        document.getElementById("currentPlayer").innerHTML = whosNext + ", it's your turn!";
        gameOver = checkWinner(who);
      }
      else{
        //Pick another place
        var whosNext = whosTurn();
        document.getElementById("currentPlayer").innerHTML = whosNext + ", it's your turn!";
        return;
      }
    }
    //Something that lets the players know who has won and the game is over
  }

  function checkWinner(who){
    //Impossible to win inn less then 5 turns X O X O  need atleast 3 of a kind to win
    if(turnCounter < 5){
      return false;
    }

    var upperLeft = document.getElementById("1").innerText;
    var upperMiddle = document.getElementById("2").innerText;
    var upperRight = document.getElementById("3").innerText;

    var middleLeft = document.getElementById("4").innerText;
    var middleMiddle = document.getElementById("5").innerText;
    var middleRight = document.getElementById("6").innerText;

    var lowerLeft = document.getElementById("7").innerText;
    var lowerMiddle = document.getElementById("8").innerText;
    var upperlowerRight = document.getElementById("9").innerText;

    var winner = false;

   //Check for winning combination
   if(upperLeft == who && upperMiddle == who && upperRight == who ){
       winner = true;
    }
    else if (middleLeft == who && middleMiddle == who && middleRight == who ) {
      winner = true;
    }
    else if (lowerLeft == who && lowerMiddle == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperLeft == who && middleLeft == who && lowerLeft == who ) {
      winner = true;
    }
    else if (upperMiddle == who && middleMiddle == who && lowerMiddle == who ) {
      winner = true;
    }
    else if (upperRight == who && middleRight == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperLeft == who && middleMiddle == who && upperlowerRight == who ) {
      winner = true;
    }
    else if (upperRight == who && middleMiddle == who && lowerLeft == who ) {
      winner = true;
    }
    //Combination check over

    if(winner == true){
      if(who == 'X'){
        //Implemtnt Score Board ?
        playerXWins++;
        document.getElementById("Xwins").innerHTML = (playerXWins + " wins");
        document.getElementById("currentPlayer").innerHTML = ("Player " + who + " has won!");
        return true;
      }
      else{
        //Implemtnt Score Board ?
        playerOWins++;
        document.getElementById("Owins").innerHTML = (playerOWins + " wins");
        document.getElementById("currentPlayer").innerHTML = ("Player " + who + " has won!");
        return true;
      }
      return true;
    }
    else if(turnCounter == 9){
      //It is a Draw
      numberOfDraws++;
      document.getElementById("Draws").innerHTML = ("Draws: " + numberOfDraws);
      document.getElementById("currentPlayer").innerHTML = ("This game has ended in a Draw");
      return true;
    }
      //Nobody has won and not a Draw
      return false;
  }
  //Small change

/*
module.exports = {
  checkWinner,
  whereToPlace,
  whosTurn,
  playAgain
}
*/
