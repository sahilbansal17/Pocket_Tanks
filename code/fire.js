var bullet = new createjs.Bitmap("../images/bullet.png");

function fireBullet(nozzle, currentTank){
    // angle used for the calculation of x and y coordinate of the bullet
    var angle = nozzle.rotation * Math.PI / 180;
    
    // set the registration point for the bullet
    bullet.regX = 0;
    bullet.regY = 3.5;
    
    // set the x and y coordinates and the rotation
    if(currentTank === 1){
        bullet.x = nozzle.x + 32*Math.cos(angle);
        bullet.y = nozzle.y + 32*Math.sin(angle);
        bullet.rotation = nozzle.rotation;
    }
    else{
        bullet.x = nozzle.x - 32*Math.cos(angle);
        bullet.y = nozzle.y - 32*Math.sin(angle);
        bullet.rotation = nozzle.rotation - 180;
    }
    
    // add to stage and update
    stage.addChild(bullet);
    stage.update();
}