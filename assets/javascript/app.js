
var panel = $("#quiz-area");
var countStartNumber = 30;


var questions = [
    {
        question: 'The ocean makes up how  much of the earths surface?',
        answers: ['40%', '71%', '36%', '87%'],
        correctAnswer: '71%'
    },
    {
        question: 'Where is the deepest point?',
        answers: ['Mariana Trench', 'Philippine Trench', 'Eurasian Basin', 'Tonga Trench'],
        correctAnswer: 'Mariana Trench'
    },
    {
        question: 'From how far away can the Great Barrier Reef be seen?',
        answers: ['Mesosphere', 'Top of Mount Everest', 'The Moon', 'Stratosphere'],
        correctAnswer: 'The Moon'
    },
    {
        question: 'How far does the Gray Whale migrate every year(the longest of any mammel)?',
        answers: ['15,000 miles', '2,000 miles', '7,000 miles', '10,000 miles'],
        correctAnswer: '10,000 miles'
    },
    {
        question: 'What is the largest animal on earth EVER?',
        answers: ['Megalodon', 'Blue Whale', 'Tyrannosaurus-Rex', 'Giant Squid'],
        correctAnswer: 'Blue Whale'
    },
    {
        question: 'How much of the worlds volcanic activity occurs in the ocean?',
        answers: ['20%', '40%', '70%', '90%'],
        correctAnswer: '90%'
    },
    {
        question: 'How much of the underwater world remains unexplored?',
        answers: ['95%', '73%', '16%', '0%'],
        correctAnswer: '95%'
    },
    {
        question: 'Geographers divide the ocean into how many parts?',
        answers: ['2', '3', '4', '5'],
        correctAnswer: '4'
    },
    {
        question: 'What microscopic organisms are respnosible for producing about 1/2 of the worlds oxygen?',
        answers: ['phytoplankton', 'seagrasses', 'sea anemones', 'Acantharea'],
        correctAnswer: 'seagrasses'
    },
    {
        question: 'Which shark can thrive in both salt and fresh water? ?',
        answers: ['Sand', 'Bull', 'Thresher', 'Smooth-Hound'],
        correctAnswer: 'Bull'
    }

];

var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.timeUp();
        }
    },

    loadQuestion: function () {

        timer = setInterval(game.countdown, 1000);

        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {
        game.counter = countStartNumber;
        $("#counter-number").text(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function () {

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(timer);

        panel.html("<h2>All done, heres how you did!</h2>");

        $("#counter-number").text(game.counter);

        panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        panel.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {

        game.incorrect++;

        clearInterval(timer);

        panel.html("<h2>Nope!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        //panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    answeredCorrectly: function () {

        clearInterval(timer);

        game.correct++;

        panel.html("<h2>Correct!</h2>");
        //panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function () {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
    game.reset();
});

$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
});

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion();
});
