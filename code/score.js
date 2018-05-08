var tank1Score = new createjs.Text("Tank 1 Points: ", "20px Arial", "#000000");
var tank2Score = new createjs.Text("Tank 2 Points: ", "20px Arial", "#000000");

var score1 = 0; 
var score2 = 0;

function showScore(){
    tank1Score.text += score1;
    tank2Score.text += score2;
    
    tank1Score.x = canvas.width/10;
    tank1Score.y = canvas.height/20;
    tank1Score.textBaseline = "alphabetic";
    
    tank2Score.x = 7*canvas.width/10;
    tank2Score.y = canvas.height/20;
    tank2Score.textBaseline = "alphabetic";
    
    stage.addChild(tank1Score);
    stage.addChild(tank2Score);
    stage.update();
}

function updateScore(){
    tank1Score.text = "Tank 1 Points: " + score1;
    tank2Score.text = "Tank 2 Points: " + score2;
    
    stage.update();
}