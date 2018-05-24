var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display =document.getElementById("p1Display");
var p2Display =document.getElementById("p2Display");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameEnd = false;
var winningScore = 10;

//player 1 button//

p1Button.addEventListener("click", function(){
    if(!gameEnd){
    p1Score ++;
    if(p1Score === winningScore){
        gameEnd = true;
        p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
    }
});

//player 2 button//

p2Button.addEventListener("click", function(){
    if(!gameEnd){
    p2Score ++;
    if(p2Score === winningScore){
     gameEnd = true; 
     p2Display.classList.add("winner");  
    }
    p2Display.textContent = p2Score;
    }
});

// reset button//

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0; 
    p1Display.textContent = 0;
    p2Display.textContent = 0; 
    p1Display.classList.remove("winner"); 
    p2Display.classList.remove("winner"); 
    gameEnd = false;
    });
 
function calculateScore(){
    alert("Thank you for playing!!!");
}

// ========Answers========

 function answerFalse(){
  wrongAnswer(); 
 }
 function answerTrue(){
  rightAnswer(); 
 }
 
 /*right-or-wrong answer event handlers*/
 function wrongAnswer(){
  alert('your answer was incorrect!'); 
 }
 function rightAnswer(){
   alert('you answered correctly!');
 }
 

