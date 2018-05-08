// stage for referencing the canvas element
var stage = new createjs.Stage("terrain");

// canvas and its width, height
var canvas = document.getElementById("terrain");

// set canvas width and height to the width and height of the full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - window.innerHeight/15;

var width = canvas.width;
var height = canvas.height;

var points = [] ;
// draws the terrain 
function drawTerrain(){
    var displace = height/4; // for intial setting up of the tanks and basic game 
    var roughness = 0.6;
    // Gives us a power of 2 based on our width
    var power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

    // Set the initial left point
    points[0] = height/2 + (Math.random()*displace*2) - displace;
    // set the initial right point
    points[power] = height/2 + (Math.random()*displace*2) - displace;
    displace *= roughness;

    // Increase the number of segments
    for(var i = 1; i < power; i *=2){
        // Iterate through each segment calculating the center point
        for(var j = (power/i)/2; j < power; j+= power/i){
            points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
            points[j] += (Math.random()*displace*2) - displace
        }
        // reduce our random range
        displace *= roughness;
    }    

//            console.log(power);
    var numPoints = power; // number of points 
    var line = new createjs.Shape(); // shape defining the terrain curve 

    // add graphics to the shape 
    line.graphics.beginLinearGradientFill(["#0F0","#040"], [0, 1], 0, height/2, 0, height);

    // increase height of points left to width/2
    var delta = width/10;
    var incFactor = Math.random()*100 + 600;
    var increment = height/100;

    for(var ptCt = width/2 - delta; ptCt < width/2; ptCt ++){
        points[ptCt] -= increment;
        increment += height/incFactor;
    }

    // increase height of points right to width/2
    for(ptCt = width/2; ptCt < width/2 + delta; ptCt ++){
        points[ptCt] -= increment;
        increment -= height/incFactor;
    }

    // if some points are near to the height of screen, update them 
    for(ptCt = 0; ptCt < numPoints ; ptCt ++){
        if(points[ptCt] < 10){
            points[ptCt] = 10;
        }
    }

    for(ptCt = 0; ptCt < numPoints; ptCt ++){
        line.graphics.drawRect(ptCt, points[ptCt], 1, height - points[ptCt]);
    }

//            console.log(points);

    line.graphics.endFill();

    // render it on the stage
    stage.addChild(line);
    stage.update();
    showTanks();
    showScore();
}