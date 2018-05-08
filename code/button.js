var buttonModule = angular.module("gameButtons", []);

buttonModule.controller("gameControls", function(){
    this.selected = 0; // 1 when some button is selected
    this.tab = 0; // 1 for move, 2 for weapon, 3 for angle, 4 for power
    this.currentTank = 1; // the current tank which is gonna fire
    this.tankMoves = [4, 4]; // moves left for the two tanks
    this.tankPowers = [60, 60]; // state maintaining the powers of the tank 
    
    this.selectTab = function(setTab){
        this.selected = 1;
        this.tab = setTab;
    }
    this.reset = function(){
        this.selected = 0;
        this.tab = 0;
        var tank = this.currentTank;
        this.tankPowers[tank - 1] = this.power;
    }
    
    // switch the current tank
    this.fire = function(){
        if(this.currentTank == 1){
            fireBullet(nozzle1, this.currentTank);
            this.currentTank = 2;
        }
        else{
            fireBullet(nozzle2, this.currentTank);
            this.currentTank = 1;
        }
        // based on the updated tank, update the angle value
        if(this.currentTank === 1){
            this.angle = -1*nozzle1.rotation;
        }
        else{
            this.angle = -1*nozzle2.rotation;
        }
        // update the power value
        this.power = this.tankPowers[this.currentTank - 1];
    }
    
    // move the current tank to the left
    this.moveLeft = function(){
        var tank = this.currentTank;
        if(this.tankMoves[tank - 1] >= 1){
            this.tankMoves[tank - 1] --;
        }
    }
    
    // move the current tank to the right
    this.moveRight = function(){
        var tank = this.currentTank;
        if(this.tankMoves[tank - 1] >= 1){
            this.tankMoves[tank - 1] --;
        }
    }
    
    // update the angle of nozzle of the right tank
    this.updateAngle = function(){
        var tank = this.currentTank;
        if(tank === 1){
            nozzle1.rotation = -1*this.angle;
        }
        else{
            nozzle2.rotation = -1*this.angle;
        }
        stage.update();
    }
});