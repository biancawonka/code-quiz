const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "What is the correct way to create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()"],
        answer: "function myFunction()"
      },
      {
        question: "Which HTML tag is used to link an external JavaScript file?",
        options: ["<js>", "<javascript>", "<script>", "<scripting>"],
        answer: "<script>"
      },

      {
        question: "Which method is used to add elements to the end of an array?",
        options: ["push()", "pop()", "join()", "concat()"],
        answer: "push()"
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["*", "=", "+", "-"],
        answer: "="
      },

    
  
  ];
  

  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const initialsContainer = document.getElementById("initials-container");
  const startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  quizContainer.appendChild(startButton);
  

  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let score = 0;
  

  function startQuiz() {
    startButton.style.display = "none";
    timer = setInterval(function() {
      timeLeft--;
     
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
    showQuestion();
  }
  

  function showQuestion() {
    quizContainer.innerHTML = "";
    const questionObj = questions[currentQuestionIndex];
    const questionElement = document.createElement("h2");
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);
  
    for (let option of questionObj.options) {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", function() {
        checkAnswer(option, questionObj.answer);
      });
      quizContainer.appendChild(optionButton);
    }
  }
  

  function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      score += 10;
    } else {
    
      timeLeft -= 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
 
  function endQuiz() {
    clearInterval(timer);
   
    resultContainer.innerHTML = "<h2>Quiz is over!</h2><p>Your final score: " + score + "</p>";
  
    initialsContainer.innerHTML = "<label>Enter your initials:</label><input type='text' id='initials'><button onclick='saveScore()'>Save</button>";
  }
  

  function saveScore() {
    const initials = document.getElementById("initials").value;
    
  }
  

  startButton.addEventListener("click", startQuiz);
  
  
function startQuiz() {
    startButton.style.display = "none";
    updateTimer(); 
    timer = setInterval(function() {
      updateTimer();
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
    showQuestion();
  }
  
  
  function updateTimer() {
    document.getElementById("timer").textContent = "Time: " + timeLeft;
  }
  
 
  