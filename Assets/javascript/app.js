// create global variables for the time, trivia questions, questionsAnswers,
// empty variables for correctAnswers, wrongAnswers, intervalID (to call later)
// and finally ones where the user ran out of time

var time = 5;

// gotta stick with what you know kid 
var questions = {
    q1: 'is this the krusty krab?',
    qa: 'no this is patrick',
    qb: 'yes',
    qc: 'turtle',
    qd: 'wtf',
    // couldnt think of any other questions so fuck it im testing random things out
    q2: 'what came first the chicken or the egg?',
    q2a: 'no ',
    q2b: 'yes',
    q2c: 'turtle',
    q2d: 'wtf'



};
// hopefully i can set the option for the questions to the answer
// then have it alert :)
var questAnswers = {
    q1: 'no this is patrick',
    q2: 'turtle',

}
// once again empty variables so i can later push towards 
// ooooh its gunna look sick af

var correctAnswer;
var wrongAnswers;
var intervalID;
var didNotAnswer;

// testing to see if the questions are loading
console.log(questions.q1);

// once the game starts everything should eventually go in'herrrr
function startGame() {

    // as the page loads, there will have the amazing title
    // the startgame button 
    // maybe ill add another button for motivational music but time will tell
    function gamePlay() {
        // .on("click") function for the buttons
        $('.startBtn').on('click', function () {

            // if the button is clicked on I want the button to disappear 
            $('button').remove('.startBtn');
            // once the button is clicked, the button and title will disappear
            $('.titleGame').remove();
            // i want it to run question 1
            quest1();
            // set the time count to inc/dec by 1 second
            intervalId = setInterval(timeCount, 1000);


        });


    }
    // function por primera pregunta

    function quest1() {

        // create a new div to include the question
        var newDiv = $('<div class="quest_q1" style="font-size: 25px;">');
        // print the question on the html
        newDiv.html(questions.q1);
        // for the question we need 4 different options
        // optionA
        // create a new div to contain the button 

        var optionA = $('<button class="A  btn-secondary" /button>');
        // print the question on the button
        optionA.html(questions.qa);
        // append the div from the hmtl to the new div created here
        $('.possAns').append(optionA);

        // repeat this method for options B-D

        // option B
        var optionB = $('<button class="B btn-secondary" style="margin-top: 10px;"/button>');
        optionB.html(questions.qb);
        $('.possAns').append(optionB);


        // option C
        var optionC = $('<button class="B btn-secondary" style="margin-top: 10px;"/button>');
        optionC.html(questions.qc);
        $('.possAns').append(optionC);

        // option D

        var optionD = $('<button class="B btn-secondary" style="margin-top: 10px;"/button>');
        optionD.html(questions.qd);
        $('.possAns').append(optionD);

        // append the question div inside the button container so it takes
        // the position of the question
        $('.btnContainer').append(newDiv);




    }




    // here is for the timer
    // create a function for the time to decrease

    function timeCount() {
        // we want time to go down by 1 (time clock)

        time--;
        // making sure the time is actually going down like we wanted
        console.log(time);

        // if it works in the console it should work to print on the html
        // call the div in the html and wathc that baby work 
        $('.timeLeft').html(time);

        // create IF statement to take away the clearInterval so it doesnt continue 
        // running 

        if (time === 0) {

            clearInterval(intervalId);
            console.log(true);
        }





        // function to for the end of the game
        // total number of correct answers
        // total incorrect answers
        // total answers ran out of time

        function finalScore() {
            $('.correct').html("Total Correct: " + correctAnswer);
            console.log(correctAnswer);
            $('incorrect').html("Total Incorrect: " + wrongAnswers);
            console.log(wrongAnswers);
            $('not-answered').html("Not Answered: " + didNotAnswer);
            console.log(didNotAnswer);


        }
        finalScore();
    }
    gamePlay();

}
startGame();