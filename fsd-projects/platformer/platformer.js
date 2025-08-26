$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(290,650,300,650,"gold")
    createPlatform(50,500,110,500,"black")
  createPlatform(810,550,30,550,"gold")
  createPlatform(1010,690,250,10,"black")
  createPlatform(950,450,300,70,"black")
  createPlatform(820,650,50,10,"gold")




    // TODO 3 - Create Collectables
    createCollectable("diamond",1200,200,0.4,0.8)
    createCollectable("database",1200,650,0.5,0.5)
    createCollectable("steve",500,600,0.5,0.3)
    createCollectable("database",1100,200,0.4,0.8)



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 150, 1000);
    createCannon("right", 650, 2000);
    createCannon("top",1100,1000);
    createCannon("bottom", 650, 1000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
