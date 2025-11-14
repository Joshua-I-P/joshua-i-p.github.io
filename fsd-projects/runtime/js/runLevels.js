var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
   function createSaw (x,y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.addChild(obstacleImage);
  }
  
   // Enemy creation
   function createEnemy(x,y){
   var enemy = game.createGameItem("enemy", 25);
   var redSquare = draw.rect(50, 50, "red");
   redSquare.x = -25;
   redSquare.y = -25;
   enemy.addChild(redSquare);
   enemy.x = x;
   enemy.y = y -50;
   enemy.velocityX = -3.4;
   enemy.velocityY = 0;
   enemy.rotationalVelocity = 2
   enemy.onPlayerCollision = function() {
    game.changeIntegrity(-20)
   }
   enemy.onProjectileCollision = function(){
    game.increaseScore(100)
     
      enemy.shrink()
    
   }
   game.addGameItem(enemy);
  }
  
   //Collectables
    function createReward(x,y) {
      var collectable = game.createGameItem('collectable', 35);
      var goldCoin = draw.circle(35, 'gold', 'black', 2);
      goldCoin.x = -1.5;
      goldCoin.y = -1.5;
      collectable.addChild(goldCoin);
      collectable.x = x;
      collectable.y = y;
      collectable.velocityX = -2
      collectable.onPlayerCollision = function() {
        collectable.fadeOut();
        game.changeIntegrity(30);
        game.increaseScore(50);
      }
      collectable.onProjectileColision = function() {
        collectable.fadeOut();
        game.changeIntegrity(30);
        game.increaseScore(50);
      }
      game.addGameItem(collectable)
    }
     
     //Level Marker
     function createMarker(x){
      var finishLine = game.createGameItem('finishLine', 60);
      var grayBox = draw.rect(50, 200, 'gray');
      grayBox.x = -30
      grayBox.y = -100
      finishLine.addChild(grayBox);
      finishLine.x = x;
      finishLine.y = groundY - 100;
      finishLine.velocityX = -1.8;
      finishLine.onPlayerCollision = function(){
        finishLine.fadeOut()
        game.changeIntegrity(1000);
        game.increaseScore(2000);
        startLevel();
      }
      finishLine.onProjectileCollision = function(){
        finishLine.fadeOut()
        game.changeIntegrity(1000);
        game.incraseScore(2000);
        startLevel();
      }
      game.addGameItem(finishLine)
     }
    
    function startLevel() {
      // TODO 13 goes below here
     var level = levelData[currentLevel];
     var levelObjects = level.gameItems;

     for (var i = 0; i < levelObjects.length; i++){
      if (levelObjects[i].type === 'sawblade'){
        createSaw(levelObjects[i].x,levelObjects[i].y)
      }
      else if (levelObjects[i].type === 'enemy'){
        createEnemy(levelObjects[i].x,levelObjects[i].y)
      }
      else if(levelObjects[i].type === 'reward'){
        createReward(levelObjects[i].x, levelObjects[i].y)
      }
      else if (levelObjects[i].type === 'finishLine'){
        createMarker(levelObjects[i].x)
      }
     }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
