// Potential questions and answers
console.log("Hi!!!");



// 1. store the first name of player entered


// 2. store the "relation to Belize" button clicked to dictate message at the end of the game. 


// ==================Bank of 50 questions=========

// (function() {
//     var questions = [{
//       question: "When did Belize become independent?",
//       answers: [1961, 1971, 1981],
//       correctAnswer: 2

//     }, {
//         question: "What is Juliet's nickname?",
//         answers: ["Jules", "Julie", "Jay"],
//         correctAnswer: 0
//     }, {
//       question: "What is Jules",
//       answers: ["Girl", "Boy", "Baby"],
//       correctAnswer: 0
//     }, {
//       question: "Where is Jules?",
//       answers: ["At the mall", "At Ironhack", "At home"],
//       correctAnswer: 1
//     }, {
//       question: "What is Juliet's last name?",
//       answers: ["Urbina", "Thomas", "Sylvestre"],
//       correctAnswer: 0
//     }];
// });
    
    // var questionCounter = 0; // question number
    // var selections = []; //Answers
    // var quiz = $('#game'); //Quiz game div object
    
                        // Display initial question
    // displayNext();
    
                        // Click handler for the 'next' button
    // $('#next').on('click', function (e) {
                        //   e.preventDefault();

// });


// 3. questions will be 10 random questions from the bank of questions below.

// function quizQuestionsIndex(){
//     // for questionIndexArray = [
//       for(var i = 0; i < array.length; i++){
//         questionIndexArray.push(Math.floor(Math.random()*10));
//       }
//     return quizIndexArray;
//   }

// =================


//5. Manually score the questions answered correctly for 2 Players

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
    alert("Explore Belize");
}

// 6.  Compare the scores for game 2 to announce the winner! No customized message will be issued as a total of 19 questions will be issued and as soon as a player scores 10, the game will end.

// ==================

//  I am a Belizean  >= 8 "You really are a Belizean"
//  I have been to Belize >=6 "You are almost a Belizean
//  I have never been to Belize >= 5 "You could be a Belizean
//  Your quesses were good.
// } else{
//     Come to explore Belize

// ======================


 

