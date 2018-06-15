var tank1 = new createjs.Bitmap("../images/tankVehicle1.png");
var tank2 = new createjs.Bitmap("../images/tankVehicle2.png");
var nozzle1 = new createjs.Bitmap("../images/tankNozzle1.png");
var nozzle2 = new createjs.Bitmap("../images/tankNozzle2.png");

// registration points for the tanks
tank1.regX = 40;
tank1.regY = 15;

tank2.regX = 40;
tank2.regY = 15;

// setting of the registration points for nozzle around which the bitmap rotates
nozzle1.regX = 0;
nozzle1.regY = 10;

nozzle2.regX = 35;
nozzle2.regY = 10;

// set the x coordinates of the tanks and the nozzles
tank1.x = width/2 - width/3 + tank1.regX;
tank2.x = width/2 + width/3 + tank2.regX;

nozzle1.x = tank1.x + 55 - tank1.regX;
nozzle2.x = tank2.x - 10 + nozzle2.regX - tank2.regX;

// try rotating the nozzles around the registration points
nozzle1.rotation = -30;
nozzle2.rotation = -330;

function showTanks(){
//    console.log(points);
    
    // y coordinates of terrain around tank1
    var y11 = Math.floor(points[tank1.x]);
    var y12 = Math.floor(points[tank1.x + 35]);
    
    var angle1 = Math.tan((y11 - y12)/35) * 180 / Math.PI;
    
    // y coordinates of terrain around tank2
    var y21 = Math.floor(points[tank2.x]);
    var y22 = Math.floor(points[tank2.x + 35]);

    var angle2 = Math.tan((y21 - y22)/35) * 180 / Math.PI;
    
//    console.log(angle1);
//    console.log(angle2);
    
    tank1.y = (y11 + y12)/2 - 30 + tank1.regY;
    tank2.y = (y21 + y22)/2 - 30 + tank2.regY;
    
    tank1.rotation = -1*angle1/2;
    tank2.rotation = 360-angle2/2;
    
    nozzle1.rotation -= angle1/2;
    nozzle2.rotation -= angle2/2;
    
    nozzle1.y = tank1.y - 5 + nozzle1.regY - tank1.regY;
    nozzle2.y = tank2.y - 5 + nozzle2.regY - tank2.regY;
    
    stage.addChild(tank1);
    stage.addChild(tank2);
    stage.addChild(nozzle1);
    stage.addChild(nozzle2);
    stage.update();
}