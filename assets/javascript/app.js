$("#start").on('click', function() {
  game.start();

})

var questionList = [
  {question: "What was the first full length CGI movie?",
   answer: ["A Bug's Life", "Monster Inc.", "Toy Story", "The Lion King"],
   correctAnswer: "Toy Story"
  },
  {question: "Which of these is NOT a name of one of the Spice Girls?",
   answer: ["Sporty Spice", "Fred Spice", "Scary Spice", "Post Spice"],
   correctAnswer: "Fred Spice"	
  },
  {question: "Which NBA team won the most titles in the 90s?",
   answer: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
   correctAnswer: "Chicago Bulls"	
  },
  {question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
  answer: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana"	
  },
  {question: "Which popular Disney movie featured the song, 'Circle of Life'?",
  answer: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"	
  }
]


var game = {
  correct:0,
  incorrect:0,
  counter:30,
 
  start: function() {
   
    $("#submain").remove();
    $("#game").append('<h2>Time Remaining: <span id ="counter">30</span> Seconds</h2>');
   
    timer = setInterval(game.countdown, 1000);

    for (i = 0; i < questionList.length; i++) {
      $("#game").append("<h2>" + questionList[i].question + "</h2>");
      for (j = 0; j < questionList[i].answer.length; j++) {
        $("#game").append("<input type = 'radio' name = 'question-" + i + "' value = '" + questionList[i].answer[j] +"'>" 
         	 + questionList[i].answer[j]);
      }
    }

    $('input[name=question-0]').change(function() {
   
      if ($(this).val() == questionList[0].correctAnswer) {
         game.correct++;
      }
      else {
       	 game.incorrect++;
      }
    });
  
    $('input:radio[name="question-1"]').change(function() {
      if ($(this).val() == questionList[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $('input:radio[name="question-2"]').change(function() {
       if ($(this).val() == questionList[2].correctAnswer) {
         game.correct++;
       }
       else {
       	 game.incorrect++;
       }
    });

    $('input:radio[name="question-3"]').change(function() {
      if ($(this).val() == questionList[3].correctAnswer) {
         game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $('input:radio[name="question-4"]').change(function() {
      if ($(this).val() == questionList[4].correctAnswer) {
         game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
  
  },

  countdown: function() {
  	game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      game.end();
    }

  },

  end: function() {
    clearInterval(timer);
    game.summary();
  },

  summary: function() {
  	var unanswered = questionList.length - game.correct - game.incorrect;
  	$("#game").remove();
  	$("#result").append("<h2>All Done!</h2>");
  	$("#result").append("<h2>Correct Answers: " + game.correct + "</h2>");
  	$("#result").append("<h2>Incorrect Answers: " + game.incorrect + "</h2>");
  	$("#result").append("<h2>Unanswered: " + unanswered + "</h2>");
  }

}