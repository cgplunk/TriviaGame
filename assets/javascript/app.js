$('#start').on('click',function(){
    game.start();
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
    counter: 120,
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
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
            for(var j=0;j<questions[i].answers.length;j++){
                $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }   
    }
}