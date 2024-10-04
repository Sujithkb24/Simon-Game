var buttonColors = ["green","red","yellow","blue"];
var gamePattern= [];
var userClickedPattern=[];
var i=0;
var j=0;
var count=0;
var started = false


function nextSequence(){
    var newNumber = Math.floor(Math.random()*3);
    var newColor = buttonColors[newNumber];
    gamePattern.push(newColor);
    $("#"+newColor).addClass("pressed");
    setTimeout(function(){$("#"+newColor).removeClass("pressed")},100);
    $("h1").text("Level "+i);
    i++;
    var Audio1 = new Audio("sounds/"+newColor+".mp3");
    Audio1.play();
};



$(".btn").click(function(){
    $(this).addClass("pressed");
    setTimeout(function(){$(".btn").removeClass("pressed")},100);
    var Audio1 = new Audio("sounds/"+this.id+".mp3");
    Audio1.play();
});


$(".btn").click(function handler(){
    userClickedPattern.push(this.id); 
});


$(document).keydown(function(){
    if(!started){
        nextSequence();
        started=true;
    }
});



$(".btn").click(function GameLogic(){
    if(this.id==gamePattern[j]){
        j++;
    }   
    else{
        $("h1").text("Game Over ! Press Any Key to Restart ");
        $("body").addClass("game-over");
        setInterval(function(){$("body").removeClass("game-over")}, 200);
        var Audio2 = new Audio("sounds/wrong.mp3");
        Audio2.play();
        gamePattern=[];
        userClickedPattern=[];
        j=0;
        i=0;  
        started= false;
    }
    if((gamePattern.length==userClickedPattern.length)&&(userClickedPattern.length!=0)){
        userClickedPattern=[];
        j=0;
        setTimeout(function(){nextSequence();},300);
    }
});



