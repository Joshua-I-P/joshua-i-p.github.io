/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
  ENTER: 13,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  W: 87,
  A: 65,
  S: 83,
  D: 68
};
  // Game Item Objects
  const walker = {
    x: 100,
    y: 100,
    size: 50,
    xSpeed: 0,
    ySpeed: 0,
    isTagged: false,
    baseSpeed: 5
  }
  const walkerP2 = {
    x: 750,
    y: 600,
    size: 50,
    xSpeed: 0,
    ySpeed: 0,
    isTagged: true,
    baseSpeed: 5
  }
  
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
   setInterval(detectTag, 300)
  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);                          
  $(document).on('keyup', handleKeyUp)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    wallCollision()
    
    
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
    walker.xSpeed = -walker.baseSpeed
   }
   if (event.which === KEY.RIGHT) {
    walker.xSpeed = walker.baseSpeed
   }
   if (event.which === KEY.UP) {
    walker.ySpeed = -walker.baseSpeed
   }
   if (event.which === KEY.DOWN) {
   walker.ySpeed = walker.baseSpeed
   } 
   //Player 2 Movement
   if (event.which === KEY.A) {
    walkerP2.xSpeed = -walkerP2.baseSpeed
   }
   if (event.which === KEY.D) {
    walkerP2.xSpeed = walkerP2.baseSpeed
   }
   if (event.which === KEY.W) {
    walkerP2.ySpeed = -walkerP2.baseSpeed
   }
   if (event.which === KEY.S) {
   walkerP2.ySpeed = walkerP2.baseSpeed
}
  }
 function handleKeyUp(event){
 if (event.which === KEY.RIGHT || event.which === KEY.LEFT){
   walker.xSpeed = 0
 }
 if (event.which === KEY.UP || event.which === KEY.DOWN){
   walker.ySpeed = 0
 }
  //Player 2 keyUp
  if (event.which === KEY.A || event.which === KEY.D){
   walkerP2.xSpeed = 0
 }
  if (event.which === KEY.W || event.which === KEY.S){
   walkerP2.ySpeed = 0
 }
 }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  walker.x += walker.xSpeed;
  walker.y += walker.ySpeed;
  walkerP2.x += walkerP2.xSpeed;
  walkerP2.y += walkerP2.ySpeed;
  
}
  function redrawGameItem(){
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    $("#walkerP2").css("left", walkerP2.x);
    $("#walkerP2").css("top", walkerP2.y);
  }
  function wallCollision(){
    if (walker.x < 0){
      walker.x -= walker.xSpeed
      
    }
      
    if (walker.y < 0){
      walker.y -= walker.ySpeed
    } 

    if (walker.x >= $('#board').width() - 50){
      walker.x -= walker.xSpeed
    } 
      
    if (walker.y >= $('#board').height() - 50){
      walker.y -= walker.ySpeed
    } 
    // P2 wall collision
    if (walkerP2.x < 0){
      walkerP2.x -= walkerP2.xSpeed
      
    }
      
    if (walkerP2.y < 0){
      walkerP2.y -= walkerP2.ySpeed
    } 

    if (walkerP2.x >= $('#board').width() - 50){
      walkerP2.x -= walkerP2.xSpeed
    } 
      
    if (walkerP2.y >= $('#board').height() - 50){
      walkerP2.y -= walkerP2.ySpeed
    } 
  }
    function detectTag(){
      
      if(walker.x < walkerP2.x + walker.size && walker.x + walker.size > walkerP2.x && walker.y + walker.size > walkerP2.y && walkerP2.y + walkerP2.size > walker.y){
        walker.isTagged = !walker.isTagged;
        walkerP2.isTagged = !walkerP2.isTagged;
      }
      if (walker.isTagged){ 
          walker.baseSpeed = 7
        $('#walker').css('border', '5px solid yellow')
        
      } else{
        walker.baseSpeed = 5
        $('#walker').css('border', '1px solid white');
      }
      if (walkerP2.isTagged){
        walkerP2.baseSpeed = 7
         $('#walkerP2').css('border', '5px solid yellow') 
      } else{
        walker.baseSpeed = 5
        $('#walkerP2').css('border', '1px solid white');
      }
    }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
