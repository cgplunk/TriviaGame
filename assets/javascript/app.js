$('#start').on('click',function(){
    for(var i=0;i<questions.length;i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
        for(var j=0;j<questions[i].answers.length;j++){
            $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
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