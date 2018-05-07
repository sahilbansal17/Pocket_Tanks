var tank1 = new createjs.Bitmap("../images/tankVehicle1.png");
var tank2 = new createjs.Bitmap("../images/tankVehicle2.png");
var nozzle1 = new createjs.Bitmap("../images/tankNozzle1.png");
var nozzle2 = new createjs.Bitmap("../images/tankNozzle2.png");

// set the x coordinates of the tanks and the nozzles
tank1.x = width/2 - width/3;
tank2.x = width/2 + width/3;

nozzle1.x = tank1.x + 55;
nozzle2.x = tank2.x - 10 + 35;

// setting of the registration points for nozzle around which the bitmap rotates
nozzle1.regX = 0;
nozzle1.regY = 10;

nozzle2.regX = 35;
nozzle2.regY = 10;

// try rotating the nozzles around the registration points
nozzle1.rotation = -30;
nozzle2.rotation = -330;

function showTanks(){
//    console.log(points);
    var x1 = Math.floor((points[tank1.x] + points[tank1.x + 35])/2);
    var x2 = Math.floor((points[tank2.x] + points[tank2.x + 35])/2);
    tank1.y = x1 - 30;
    tank2.y = x2 - 30;
    
    nozzle1.y = tank1.y - 5 + 10;
    nozzle2.y = tank2.y - 5 + 10;
    
    stage.addChild(tank1);
    stage.addChild(tank2);
    stage.addChild(nozzle1);
    stage.addChild(nozzle2);
    stage.update();
}