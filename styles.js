// Potential questions and answers
console.log("Hi!!!");



// 1. store the first name of player entered


// 2. store the "relation to Belize" button clicked to dictate message at the end of the game. 

// ==============questions======

// var relate = prompt (){
//       var relate = "I am a Belizean",
//       var relate = "I have been to Belize",
//       var relate = "I have never been to Belize",
//          var relate = "I have never heard of Belize",
// // }


// 3. questions will be 10 random questions from the bank of questions below.
// ==================Bank of 50 questions=========

// var firstQuestion = {

// questionNumber: 1 
// questionScript: "Where is Belize located?";
// potentialAnswers: [] 

// }

// ==================?????==



// const myQuestions = [
//     {
//       question: "What year did Belize become a Crown Colony?",
//       answers: {
//         a: "1800s",
//         b: "1900s",
//         c: "2000s"
//       },
//       correctAnswer: "a"
//     },
    // {
    //   question: "What year did Belize come independence?",
    //   answers: {
    //     a: "1976",
    //     b: "1981",
    //     c: "1999",
    //   },
    //   correctAnswer: "b"
    // }


// =================

// 4. score the questions answered correctly automatically for Game 1 = 1 Player

//5. Manually score the questions answered correctly for Game 2 = 2 Players

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


  
// 5. total the scores for Game 1 ?/10 and compare to rule to customize message and end game after 10 questions have been issued.

// 6.  Compare the scores for game 2 to announce the winner! No customized message will be issued as a total of 19 questions will be issued and as soon as a player scores 10, the game will end.


// 7. Create a pop-up message  according to the game 1 player's score to the relation question answered. 

// ==================

//  I am a Belizean  >= 8 "You really are a Belizean"
//  I have been to Belize >=6 "You are almost a Belizean
//  I have never been to Belize >= 5 "You could be a Belizean
//  Your quesses were good.
// } else{
//     Come to explore Belize

// ======================


 

