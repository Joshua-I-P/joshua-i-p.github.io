var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 1200, y: groundY },
          { type: 'enemy', x: 1300, y: groundY },
          { type: 'finishLine', x: 2500, y: groundY },
          { type: 'enemy', x: 1600, y: groundY },
          { type: 'enemy', x: 1100, y: groundY },
          { type: "reward", x: 1500, y: groundY - 70},
          { type: 'enemy', x: 2300, y: groundY },
          { type: 'enemy', x: 2600, y: groundY },
          { type: "sawblade", x: 2300, y: groundY - 105},
          { type: "sawblade", x: 1900, y: groundY - 105},
          { type: "sawblade", x: 500, y: groundY - 105},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 1700, y: groundY },
          { type: "sawblade", x: 900, y: groundY - 105},
          { type: 'finishLine', x: 3000, y: groundY },
          { type: "reward", x: 1100, y: groundY - 70},
          { type: 'enemy', x: 2300, y: groundY },
          { type: 'enemy', x: 1300, y: groundY },
          { type: "sawblade", x: 2000, y: groundY },
          { type: 'enemy', x: 2500, y: groundY },
          { type: 'enemy', x: 2950, y: groundY },
          { type: "sawblade", x: 1400, y: groundY - 105},
          { type: "sawblade", x: 2600, y: groundY - 105},
          { type: 'enemy', x: 2470, y: groundY },
          { type: 'enemy', x: 2800, y: groundY },
          { type: 'enemy', x: 2700, y: groundY },
        ],
      },
      {
        name: "Saws for Days",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 1700, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: 'finishLine', x: 4000, y: groundY },
          { type: "reward", x: 2600, y: groundY - 70},
          { type: 'enemy', x: 2300, y: groundY },
          { type: "sawblade", x: 3000, y: groundY },
          { type: "sawblade", x: 2900, y: groundY },
          { type: "sawblade", x: 3400, y: groundY },
          { type: "sawblade", x: 3800, y: groundY },
          { type: 'enemy', x: 4000, y: groundY },
          { type: 'enemy', x: 3000, y: groundY },
          { type: "sawblade", x: 1900, y: groundY - 105},
          { type: "sawblade", x: 2200, y: groundY - 105},
          { type: "sawblade", x: 3900, y: groundY },
        ],
      }
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
