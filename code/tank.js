var tank1 = new createjs.Bitmap("../images/tankVehicle1.png");
var tank2 = new createjs.Bitmap("../images/tankVehicle2.png");
var nozzle1 = new createjs.Bitmap("../images/tankNozzle1.png");
var nozzle2 = new createjs.Bitmap("../images/tankNozzle2.png");

tank1.x = width/2 - width/3;
tank2.x = width/2 + width/3;

tank1.y = height/2 - 30;
tank2.y = height/2 - 30;

nozzle1.x = tank1.x + 55;
nozzle1.y = tank1.y - 5;

nozzle2.x = tank2.x - 10;
nozzle2.y = tank2.y - 5;

nozzle1.rotation = 0;
function showTanks(){
    stage.addChild(tank1);
    stage.addChild(tank2);
    stage.addChild(nozzle1);
    stage.addChild(nozzle2);
    stage.update();
}