var bullet = new createjs.Bitmap("../images/bullet.png");

function fireBullet(nozzle, currentTank, power){
    // angle used for the calculation of x and y coordinate of the bullet
    var angle = nozzle.rotation * Math.PI / 180;
    
    // set the registration point for the bullet
    bullet.regX = 0;
    bullet.regY = 3.5;
    
    // set the speed of the bullet
    var speed = 3.0 * Math.sqrt(power);
    var vX = speed * Math.cos(angle); // velocity in the x-direction
    var vY = speed * Math.sin(angle); // velocity in the y-direction
    
    // set the x and y coordinates and the rotation
    if(currentTank === 1){
        bullet.x = nozzle.x + 35*Math.cos(angle);
        bullet.y = nozzle.y + 35*Math.sin(angle);
        bullet.rotation = nozzle.rotation;
        
        // add to stage and update
        stage.addChild(bullet);
        stage.update();
        
        // move the bullet following the laws of projectile motion
        var listener = createjs.Ticker.on("tick", function updateBullet(event, data){
            bullet.x += vX;
            bullet.y += vY;
            var updateAngle = Math.atan(vY/vX) * 180 / Math.PI;
            bullet.rotation = updateAngle;
            vY += 0.8;
            stage.update();
            
            if(Math.abs(bullet.x - tank2.x) <= 20 && Math.abs(bullet.y - tank2.y) <= 20){
                score1 += 10;
                updateScore();
            }
//            console.log(data.points);
//            console.log(data.points[Math.floor(bullet.x)] + " " + bullet.y);
            var newAngle = bullet.rotation * Math.PI / 180;
            if(Math.abs(data.points[Math.floor(bullet.x + 35*Math.cos(newAngle))] - bullet.y) <= 10){
                stage.removeChild(bullet);
                stage.update();
                createjs.Ticker.off("tick", listener);
            }
            else if(bullet.x < 0 || bullet.x > width){
                // if bullet goes out of the screen, remove this ticker 
                stage.removeChild(bullet);
                stage.update();
                createjs.Ticker.off("tick", listener);
            }
        }, null, false, {points});
    }
    else{
        bullet.x = nozzle.x - 35*Math.cos(angle);
        bullet.y = nozzle.y - 35*Math.sin(angle);
        bullet.rotation = nozzle.rotation - 180;
        
        // add to stage and update
        stage.addChild(bullet);
        stage.update();
        
        // move the bullet following the laws of projectile motion
         var listener = createjs.Ticker.on("tick", function updateBullet(event, data){
            bullet.x -= vX;
            bullet.y -= vY;
            var updateAngle = Math.atan(vY/vX) * 180 / Math.PI;
            bullet.rotation = updateAngle - 180;
            vY -= 0.8;
            stage.update();
             
            if(Math.abs(bullet.x - tank1.x) <= 20 && Math.abs(bullet.y - tank1.y) <= 20){
                score2 += 10;
                updateScore();
            }
            var newAngle = bullet.rotation * Math.PI / 180;
            if(Math.abs(data.points[Math.floor(bullet.x + 35*Math.cos(newAngle))] - bullet.y) <= 10){
                stage.removeChild(bullet);
                stage.update();
                createjs.Ticker.off("tick", listener);
            }
            else if(bullet.x < 0 || bullet.x > width){
                stage.removeChild(bullet);
                stage.update();
                createjs.Ticker.off("tick", listener);
            }
        }, null, false, {points});
    }
}