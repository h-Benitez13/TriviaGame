// create global variables for the time, trivia questions, questionsAnswers,
// empty variables for correctAnswers, wrongAnswers, intervalID (to call later)
// and finally ones where the user ran out of time

var time = 16;

// gotta stick with what you know kid 
var questions = {
    q1: 'Baby, why dont you just meet me in the middle ',
    qa: 'Im losing my mind, just a little',
    qb: 'slob on my nob',
    qc: 'this is a song?',
    qd: 'a christmas tree',
    // couldnt think of any other questions so fuck it im testing random things out
    q2: 'Back in day when I was young ',
    q2a: 'the wheels on the bus go round and round ',
    q2b: ' I was never young?',
    q2c: 'Im not a kid anymore but somedays, I sit and wish I was a kid again',
    q2d: 'im a goofy-goober yah',

    q3: 'Just Wakin up in the morning '
    



};
// hopefully i can set the option for the questions to the answer
// then have it alert :)
var questAnswers = {
    q1: 'Im losing my mind, just a little',
    q2: 'Im not a kid anymore but somedays, I sit and wish I was a kid again',
    q3: 'm not a kid anymore but somedays, I sit and wish I was a kid again'

}
// once again empty variables so i can later push towards 
// ooooh its gunna look sick af

var correctAnswer= 0;
var wrongAnswers= 0;
var intervalID;
var didNotAnswer=0;
var timeRunner = false;

// testing to see if the questions are loading
console.log(questions.q1);

// once the game starts everything should eventually go in'herrrr
function startGame() {

    $('.possAns').hide();
    $('.quest-q2').hide();
    $('.final').hide();

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
            $('img').remove();
            // i want it to run question 1
            quest1();
            questOptions();



        });


    }
    function timeCount() {
        if(!timeRunner){

            // we want time to go down by 1 (time clock)
            time--;
            // making sure the time is actually going down like we wanted
            console.log(time);
            
            // if it works in the console it should work to print on the html
            // call the div in the html and wathc that baby work 
            $('.timeLeft').html(time);
            
            
            // create IF statement to take away the clearInterval so it doesnt continue 
            // running 
        }
        
        if (time === 0) {
            $('.gif-image').html($('<img src="Assets/images/timeUp.gif" style="width: 300px;"/>'));
            clearInterval(intervalId);
            console.log(true);
        }
        
    }
   
    // function por primera pregunta

    function quest1() {
        // set the time count to inc/dec by 1 second
        timeCount(intervalId = setInterval(timeCount, 1000));
        // create a new div to include the question
        var newDiv = $('<div class="quest_q1" style="font-size: 25px;">');
        // print the question on the html
        newDiv.html("<h1>" + questions.q1 + "</h1>");
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
    var optionA = 'Im losing my mind, just a little';
    

    // fucntion to run clickable buttons 
    function optionFunk() {
        $('.optionA').click(function () {
            if (optionA === questAnswers.q1) {
                clearInterval(intervalID);
                console.log("TRRUE");
                $('.btnContainer').hide();
                $('.possAns').hide();
                correctAnswer++;
           
               
                
                quest2();
                options2();

                optionGroovy();
            };
        })
        $('.optionB').click(function () {
            if (this) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                wrongAnswers++;
                quest2();
                optionGroovy();
            }
        })
        $('.optionC').click(function () {
            if (this) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                wrongAnswers++;

                quest2();
                optionGroovy();
            }
        })
        $('.optionD').click(function () {
            if (this) {
                console.log("false");
                $('.btnContainer').hide();
                $('.possAns').hide();
                wrongAnswers++;

                quest2();
                optionGroovy();
            }
        })
    } optionFunk();

    function quest2() {
        $('.quest-q2').show();
        timeCount();
        // create a new div to include the question
        var newDiv = $('<div class="quest_q2" style="font-size: 25px;">');
        // print the question on the html
        newDiv.html("<h1>" + questions.q2 + "</h1>");
        // append the question div inside the button container so it takes
        // the position of the question
        $('.quest-q2').append(newDiv);

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
    
   
    var quest2C = 'Im not a kid anymore but somedays, I sit and wish I was a kid again';
 
    function optionGroovy() {
        $('.quest2A').click(function(){
            if(this) {
                console.log("false");
                $('.quest-q2').hide();
                wrongAnswers++;
                finalQ();
                finalOptions();
                theGetDown();
              
            }
        })
        $('.quest2B').click(function(){
            if(this) {
                console.log("false");
                $('.quest-q2').hide();
                wrongAnswers++;

                finalQ();
                finalOptions();
                theGetDown();
            
              
            }
        })
        $('.quest2C').click(function(){
            if(quest2C === questAnswers.q2) {
                console.log("true");
                $('.quest-q2').hide();
                correctAnswer++;
                finalQ();
                finalOptions();
                theGetDown();
              

            }
        })
        $('.quest2D').click(function() {
            if(quest2D) {
                console.log("false");
                $('.quest-q2').hide();
                wrongAnswers++;

                finalQ();
                finalOptions();
                theGetDown();
              

            }
        })
    } optionGroovy();
    
    function finalQ() {
        $('.final').show();
        var action = $('<div class="finalQuestion" />');
        action.html($('<h1>' + "Just wakin up in the morning" + '</h1>'));
        $('.final').prepend(action);
        
    }
    
    function finalOptions() {
        $('.finA').html("now watch me whip");
        $('.finalSong').append($('.finA'));
        
        $('.finB').html('who lives in a pineapple under the sea' );
        $('.finalSong').append($('.finB'));
        
        $('.finC').html('..im done with this game');
        $('.finalSong').append($('.finC'));
        
        $('.finD').html('gotta thank GOD, idk but today seems kinda odd');
        $('.finalSong').append($('.finD'));
        
    }
   
    var finD = questAnswers.q3
    
    function theGetDown (){
        $('.finA').click(function() {
            if(this) {
                console.log('false');
                $('.final').hide();
                wrongAnswers++;
                scoreSheet();
            }
        })
        $('.finB').click(function() {
            if(this) {
                console.log('false');
                $('.final').hide();
                wrongAnswers++;
                scoreSheet();
            }
        })
        $('.finC').click(function() {
            if(this){
                console.log('false');
                $('.final').hide();
                wrongAnswers++;
                scoreSheet();
            }
        })
        $('.finD').click(function() {
            if(finD === questAnswers.q3) {
                console.log("winner");
                correctAnswer++;
                $('.final').hide();
                scoreSheet();
            }
        })
        
    };

    function scoreSheet(){
        $('.gbye').html('WAY TO GO BIG FELLA');
        $('.timeLeft').hide();
        $('.end-gif').html($('<img src="Assets/images/end_image.gif" style="width: 300px;" />'));
        $('.correct').html("Correctly Answered: " + correctAnswer);
        $('.incorrect').html("Wrong Answers: " + wrongAnswers);
        $('.not-answered').html("Did not know: " + didNotAnswer);
    }    
    gamePlay();
    
}
startGame();