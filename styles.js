// Potential questions and answers

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  };
  this.stop = function(){
      this.sound.pause();
  };
}
var myMusic;
myMusic = new sound("The-Magic-Box.mp3");    
myMusic.play();

//Main Page//
var canvas = document.querySelector('canvas');
var c;
console.log(canvas);




// 1. store the first name of player entered


// 2. store the "relation to Belize" button clicked to dictate message at the end of the game. 


// ==================Bank of 50 questions=========
(function() {
  var questions = [{

      question: "What year did Belize gain Independence?",
      answers: ["1981", "1961", "1931"],
      correctAnswer: 0
  }, {

    question: "Where is Belize located?",
    answers: ["South America", "Central America", "North America"],
    correctAnswer: 1
  }, {
    question: "What civilization occupied Belize prior to the 15th century?",
    answers: ["Olmec", "Aztec", "Maya"],
    correctAnswer: 2
  },{

    question: "What animal was discovered in Belize in the 1920s?",
    answers: ["Jaguar", "Tapir", "Iguana"],
    correctAnswer: 1
},{

  question: "Where was the Mitchell-Hedges crystal Skull discovered ?",
  answers: ["Lamanai", "Lubaantun", "Cahal Pech"],
  correctAnswer: 1
},{

  question: " Where was the jade head discovered in Belize?",
  answers: ["Xunantunich", "Caracol", "Altun Ha in 1968"],
  correctAnswer: 2
},{

  question: " What Mayan city was inhabited for more than two thousand years?",
  answers: ["Lubaantun", "Lamanai", "Altun Ha"],
  correctAnswer: 1
},{  


  question: "What is the highest honour awarded by the government of Belize?",
  answers: ["Order of the National Hero", "Order of Belize", "Order of Distinction"],
  correctAnswer: 0
}];
  
  // ======Start Game========

   //Start game 
   var quiz = $('#game'); 

  // Start Question 
  var questionCounter = 0; 

  //Start Answer 
  var selections = []; 

  // Display initial question
  
  displayNext();

// Register answer chosen to enable next button to function
  
  $('#next').on('click', function () {
  if(quiz.is('playing')) {        
  return false;
  }
  choose();

  // If no answer selected, halt progress, pop-up = select answer
    if (isNaN(selections[questionCounter])) {
      alert('Please select an answer!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'back' button
  $('#back').on('click', function () {

    if(quiz.is('playing')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function () {
  
    if(quiz.is('playing')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animate buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  $('.backMain').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.backMain').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = " ";
    for (var i = 0; i < questions[index].answers.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].answers
      [i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;

 
  }
  
  // Reads the user selection and sends it to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested question
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

       // ???Randomize questions X 3 ???//
       var questionIndexArray = [];

      //  for(var i = 0; i < questions.length; i++){
         var index = Math.floor(Math.random() * questions.length);
         console.log("index is: ", index);
         console.log("heyyyy: ",questionIndexArray);
         questionIndexArray.push(questions[index]);
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'back' button
        if(questionCounter === 1){
          $('#back').show();
        } else if(questionCounter === 0){
          
          $('#back').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#back').hide();
        $('#start').show();
      }
    // }
    });
  }
  
  // Totals the score and returns a message to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' correct!!!');
    return score;
    
  }
})();


// ========  2 Player Game =============





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
    alert("Thank you for playing!!!");
}

// 6.  Compare the scores for game 2 to announce the winner! No customized message will be issued as a total of 19 questions will be issued and as soon as a player scores 10, the game will end.

// ==================

//  I am a Belizean  >= 8 "You really are a Belizean"
//  I have been to Belize >=6 "You are almost a Belizean
//  I have never been to Belize >= 5 "You could be a Belizean
//  Your quesses were good.
// } else{
//     Come to explore Belize

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
 

