$('#start').on('click',function(){
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
    question:"Which company makes the les paul guitar model?",
    answers: ["Fender","Ibanez","Gretsch","Gibson"],
    correctAnswer:"Gibson"
}, {
    question:"Which company makes the stratocaster guitar model?",
    answers: ["Fender","Ibanez","Gretsch","Gibson"],
    correctAnswer:"Fender"
}, {
    question:"What year was the first stratocaster made?",
    answers: ["1957","1962","1950","1954"],
    correctAnswer:"1954" 
}, {
    question:"What year was the les paul guitar introduced?",
    answers: ["1950","1960","1957","1952"],
    correctAnswer:"1952"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("time is up.");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
            for(var j=0;j<questions[i].answers.length;j++){
                $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">Done</button>'); 
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });

        this.result();
        },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done.</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}