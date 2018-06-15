function moveTankLeft(tankNo){
    if(tankNo === 1){
        // y coordinates of terrain around tank1
        var y11 = Math.floor(points[tank1.x - 35]);
        var y12 = Math.floor(points[tank1.x]);

        var angle1 = Math.tan((y11 - y12)/35) * 180 / Math.PI;

        // update the tank
        tank1.x -= 35;
        tank1.y = (y11 + y12)/2;
        tank1.rotation -= angle1/5;
        // update the nozzle
        nozzle1.x -= 35;
        nozzle1.y = tank1.y - 5 + nozzle1.regY - tank1.regY;
        nozzle1.rotation -= angle1/5;
    }
    else{
        // y coordinates of terrain around tank2
        var y21 = Math.floor(points[tank2.x - 35]);
        var y22 = Math.floor(points[tank2.x]);

        var angle2 = Math.tan((y21 - y22)/35) * 180 / Math.PI;
        // update the tank
        tank2.x -= 35;
        tank2.y = (y21 + y22)/2;
        tank2.rotation -= angle2/5;
        // update the nozzle
        nozzle2.x -= 35;
        nozzle2.y = tank2.y - 5 + nozzle2.regY - tank2.regY;
        nozzle2.rotation -= angle2/5;
    }
    stage.update();
}

function moveTankRight(tankNo){
    if(tankNo === 1){
        // y coordinates of terrain around tank1
        var y11 = Math.floor(points[tank1.x]);
        var y12 = Math.floor(points[tank1.x + 35]);

        var angle1 = Math.tan((y11 - y12)/35) * 180 / Math.PI;

        // update the tank
        tank1.x += 35;
        tank1.y = (y11 + y12)/2;
        tank1.rotation -= angle1/5;
        // update the nozzle
        nozzle1.x += 35;
        nozzle1.y = tank1.y - 5 + nozzle1.regY - tank1.regY;
        nozzle1.rotation -= angle1/5;
    }
    else{
        // y coordinates of terrain around tank2
        var y21 = Math.floor(points[tank2.x - 35]);
        var y22 = Math.floor(points[tank2.x]);

        var angle2 = Math.tan((y21 - y22)/35) * 180 / Math.PI;
        // update the tank
        tank2.x += 35;
        tank2.y = (y21 + y22)/2;
        tank2.rotation -= angle2/5;
        // update the nozzle
        nozzle2.x += 35;
        nozzle2.y = tank2.y - 5 + nozzle2.regY - tank2.regY;
        nozzle2.rotation -= angle2/5;
    }
    stage.update();
}