var correctAnswer = 0
var wrongAnswer = 0


$(document).ready(function() {
    $('#start').on("click", function() {
        // Display and start countdown
        startTimer();
        // Hide start button
        $('#start').hide();
        // Display 8 questions with answer choices in 'questions' div
        displayQuestions();
        // Display 'done' button
        $('#Submit').show();
    })
});

    // COUNTDOWN TIMER
    var timeLeft = 60;
    var timerId;

    //start and set the timer to run in 1000ms increments
    function startTimer() {
        timerId = setInterval(countdown, 1000);
    }
    function countdown() {
        if (timeLeft !== -1) {
            $('#time-left').html(timeLeft + ' seconds remaining');
            timeLeft--;
        }
        if(timeLeft === 0){
            $('#time-left').html('Time is up!');
            $('#questions').hide();
        }
    }
  
    var questions = [
        {
            question: '1. The ocean makes up how  much of the earths surface?',
            choices: ['40%', '71%', '36%', '87%'],
            correctAnswer: 1
        },
        {
            question: '2. Where is the deepest point?',
            choices: ['Mariana Trench', 'Philippine Trench', 'Eurasian Basin', 'Tonga Trench'],
            correctAnswer: 0
        },
        {
            question: '3. From how far away can the Great Barrier Reef be seen?',
            choices: ['Mesosphere', 'Top of Mount Everest', 'The Moon', 'Stratosphere'],
            correctAnswer: 2
        },
        {
            question: '4. How far does the Gray Whale migrate every year(the longest of any mammel)?',
            choices: ['15,000 miles', '2,000 miles', '7,000 miles', '10,000 miles'],
            correctAnswer: 3
        },
        {
            question: '5. What is the largest animal on earth EVER?',
            choices: ['Megalodon', 'Blue Whale', 'Tyrannosaurus-Rex', 'Giant Squid'],
            correctAnswer: 1
        },
        {
            question: '6. How much of the worlds volcanic activity occurs in the ocean?',
            choices: ['20%', '40%', '70%', '90%'],
            correctAnswer: 3
        },
        {
            question: '7. How much of the underwater world remains unexplored?',
            choices: ['95%', '73%', '16%', '0%'],
            correctAnswer: 0
        },
        {
            question: '8. Geographers divide the ocean into how many parts?',
            choices: ['2', '3', '4', '5'],
            correctAnswer: 2
        },
        {
            question: '9. What microscopic organisms are respnosible for producing about 1/2 of the worlds oxygen?',
            choices: ['phytoplankton', 'seagrasses', 'sea anemones', 'Acantharea'],
            correctAnswer: 1
        },
        {
            question: '10. Which shark can thrive in both salt and fresh water? ?',
            choices: ['Sand', 'Bull', 'Thresher', 'Smooth-Hound'],
            correctAnswer: 1
        }

        ];

    function displayQuestions() {

        // Loop through questions array
        for (var i = 0; i<questions.length; i++) {
            var question = questions[i].question;
            var choices = questions[i].choices;
            $('#questions').append(question + '<br>');

            //My loop attempt to reduce redundancy
        //function displayAnswers(choices) {
          //  for (var j = 0; j < questions[index].choices.length; j++) {
            //    var radio = $("<input>").attr({ type: 'radio', value: questions[index].choices[j], name: 'radio' + index });
              //  $('#questions').append("<label>" + radio);
           // }

       // }
    //}

            $('#questions').append("<label>" + "<input type='radio' name='quiz" + question[0] + "'id='" + (0) + "'value='" + choices[0] + "'>" + ' ' + choices[0] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + question[0] + "'id='" + (1) + "'value='" + choices[1] + "'>" + ' ' + choices[1] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + question[0] + "'id='" + (2) + "'value='" + choices[2] + "'>" + ' ' + choices[2] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + question[0] + "'id='" + (3) + "'value='" + choices[3] + "'>" + ' ' + choices[3] + "</label><br><br>");
        
        }
    }
        /*if( choice === correctAnswer){
            correctAnswer ++;
        }
        else{
            wrongAnswer++;
        }
    //The results section.....
    function results(){
        for (var i = 0; i<questions.length; i++) {
            var radios = document.getElementsByName('quiz' + (i+1));
        $(#correctAnswer).html()

        LITERALLY TRYING ALL THE THING.... SOOO TIRED, GOING TO BED NOW!





    }


    }*/
