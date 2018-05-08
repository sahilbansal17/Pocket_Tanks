var bullet = new createjs.Bitmap("../images/bullet.png");

function fireBullet(nozzle, currentTank, power){
    // angle used for the calculation of x and y coordinate of the bullet
    var angle = nozzle.rotation * Math.PI / 180;
    
    // set the registration point for the bullet
    bullet.regX = 0;
    bullet.regY = 3.5;
    
    // set the speed of the bullet
    var speed = Math.sqrt(power);
    var vX = speed * Math.cos(angle); // velocity in the x-direction
    var vY = speed * Math.sin(angle); // velocity in the y-direction
    
    // set the x and y coordinates and the rotation
    if(currentTank === 1){
        bullet.x = nozzle.x + 32*Math.cos(angle);
        bullet.y = nozzle.y + 32*Math.sin(angle);
        bullet.rotation = nozzle.rotation;
        
        // add to stage and update
        stage.addChild(bullet);
        stage.update();
        
        // move the bullet following the laws of projectile motion
        var listener = createjs.Ticker.on("tick", function updateBullet(event, data){
            bullet.x += vX;
            bullet.y += vY;
            vY += 0.09;
            stage.update();
//            console.log(data.points);
//            console.log(data.points[Math.floor(bullet.x)] + " " + bullet.y);
            if(Math.abs(data.points[Math.floor(bullet.x)] - bullet.y) <= 10){
                createjs.Ticker.off("tick", listener);
            }
        }, null, false, {points});
    }
    else{
        bullet.x = nozzle.x - 32*Math.cos(angle);
        bullet.y = nozzle.y - 32*Math.sin(angle);
        bullet.rotation = nozzle.rotation - 180;
        
        // add to stage and update
        stage.addChild(bullet);
        stage.update();
        
        // move the bullet following the laws of projectile motion
         var listener = createjs.Ticker.on("tick", function updateBullet(event, data){
            bullet.x -= vX;
            bullet.y -= vY;
            vY -= 0.09;
            stage.update();
            if(Math.abs(data.points[Math.floor(bullet.x)] - bullet.y) <= 10){
                createjs.Ticker.off("tick", listener);
            }
        }, null, false, {points});
    }
}