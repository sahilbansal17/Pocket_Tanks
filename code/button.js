var buttonModule = angular.module("gameButtons", []);

buttonModule.controller("gameControls", function(){
    this.selected = 0; // 1 when some button is selected
    this.tab = 0; // 1 for move, 2 for weapon, 3 for angle, 4 for power
    
    this.selectTab = function(setTab){
        this.selected = 1;
        this.tab = setTab;
    }
    this.reset = function(){
        this.selected = 0;
        this.tab = 0;
    }
    
    this.currentTank = 1; // the current tank which is gonna fire
    
    // switch the current tank
    this.fire = function(){
        if(this.currentTank == 1){
            this.currentTank = 2;
        }
        else{
            this.currentTank = 1;
        }
    }
    
    this.tankMoves = [4, 4]; // moves left for the two tanks
    
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
    
    
});