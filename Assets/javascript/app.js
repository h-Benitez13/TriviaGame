// create global variables for the time, trivia questions, questionsAnswers,
// empty variables for correctAnswers, wrongAnswers, intervalID (to call later)
// and finally ones where the user ran out of time

var time = 16;

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
    q2d: 'wtf',

    q3: 'where tf are my',



};
// hopefully i can set the option for the questions to the answer
// then have it alert :)
var questAnswers = {
    q1: 'no this is patrick',
    q2: 'turtle',
    q3: 'keys',

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

    $('.possAns').hide();
    $('.quest-q2').hide();
    $('.quest-q3').hide();

    $('.timeLeft').hide();
    timeCount();

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

            $('.timeLeft').show();
            // i want it to run question 1
            quest1();
            questOptions();

            // set the time count to inc/dec by 1 second
            timeCount(intervalId = setInterval(timeCount, 1000));


        });


    }
    // function por primera pregunta

    function quest1() {
        // create a new div to include the question
        var newDiv = $('<div class="quest_q1" style="font-size: 25px;">');
        // print the question on the html
        newDiv.html(questions.q1);
        // append the question div inside the button container so it takes
        // the position of the question
        $('.btnContainer').append(newDiv);
    }
    // function specifically for options of quest1
    function questOptions() {
        $('.possAns').show()
        // var optionA = $('.optionA');
        // print the question on the button
        $('.optionA').html(questions.qa);
        // append the div from the hmtl to the new div created here
        $('.possAns').append($('.optionA'));

        // repeat this method for options B-D
        // option B
        var optionB = $('.optionB');
        optionB.html(questions.qb);
        $('.possAns').append(optionB);
        // option C
        var optionC = $('.optionC');
        optionC.html(questions.qc);
        $('.possAns').append(optionC);
        // option D
        var optionD = $('.optionD');
        optionD.html(questions.qd);
        $('.possAns').append(optionD);

    }
    // rename the options to be able to call them within the function!
    var optionA = 'no this is patrick';
    var optionB = questions.qb;
    var optionC = questions.qc;
    var optionD = questions.qd;

    // fucntion to run clickable buttons 
    function optionFunk() {
        $('.optionA').click(function () {
            if (optionA === questAnswers.q1) {
                clearInterval(intervalID);
                console.log("TRRUE");
                $('.btnContainer').hide();
                $('.possAns').hide();
                quest2();
                options2();
                optionGroovy();
            };
        })
        $('.optionB').click(function () {
            if (optionB) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                quest2();
                options2();
                optionGroovy();
            }
        })
        $('.optionC').click(function () {
            if (optionC) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                quest2();
                options2();
                optionGroovy();
            }
        })
        $('.optionD').click(function () {
            if (optionD) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                quest2();
                options2();
                optionGroovy();
            }
        })
    } optionFunk();

    function quest2() {
        $('.quest-q2').show();
        // create a new div to include the question
        var newDiv = $('<div class="quest_q2" style="font-size: 25px;">');
        // print the question on the html
        newDiv.html(questions.q2);
        // append the question div inside the button container so it takes
        // the position of the question
        $('.quest-q2').append(newDiv);

    }
    function options2() {
        $('.quest-q2').append($('.questAns2'));
        $('.quest2A').html(questions.q2a);
        $('.questAns2').append($('.quest2A'));

        $('.quest2B').html(questions.q2b);
        $('.questAns2').append($('.quest2B'));

        $('.quest2C').html(questions.q2c);
        $('.questAns2').append($('.quest2C'));

        $('.quest2D').html(questions.q2d);
        $('.questAns2').append($('.quest2D'));
    }

    var quest2A = 'no';
    var quest2B ='yes';
    var quest2C = 'turtle';
    var quest2D = 'wtf';
    function optionGroovy() {
        $('.quest2A').click(function(){
            if(quest2A) {
                console.log("false");
                $('.quest-q2').hide();
              
            }
        })
        $('.quest2B').click(function(){
            if(quest2B) {
                console.log("false");
                $('.quest-q2').hide();
              
            }
        })
        $('.quest2C').click(function(){
            if(quest2C === questAnswers.q2) {
                console.log("true");
                $('.quest-q2').hide();
              

            }
        })
        $('.quest2D').click(function() {
            if(quest2D) {
                console.log("false");
                $('.quest-q2').hide();
              

            }
        })
    } optionGroovy();

    




    // here is for the timer
    // create a function for the time to decrease
    var clockrun = false;

    function timeCount() {
        // we want time to go down by 1 (time clock)
        time--;
        // making sure the time is actually going down like we wanted
        console.log(time);

        // if it works in the console it should work to print on the html
        // call the div in the html and wathc that baby work 
        $('.timeLeft').html(time);

        clockrun = true;

        // create IF statement to take away the clearInterval so it doesnt continue 
        // running 

        if (time === 0) {

            clearInterval(intervalId);
            console.log(true);
        }

    }

    function stopTime() {
        clearInterval(timeCount());
        clockrun = false;
    }
    gamePlay();

}
startGame();