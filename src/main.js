// ensure all js is valid
'use strict';

// class to represent the player
class Player {
  // constructor
  constructor(ctx) {
    this.position = {x: 0, y: 0};
    this.velocity = {x: 0.1, y: 0.1};
    this.ctx = ctx;
  }

  // method to draw the player
  draw(dt) {
    this.ctx.fillRect(this.position.x, this.position.y, 100, 100);
  }

  // method to update the player
  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
  }
}

// create the game class
class Game {
  constructor() {
    // keep track of last updated time
    this.lastUpdatedTime = 0;

    // get the html canvas
    this.initCanvas();

    // initialize the sprites array
    this.initScene();

    // create functions to start the game loop
    const init = () => {
      window.requestAnimationFrame(gameLoop);
    }

    const gameLoop = (timeStamp) => {
      // get time elapsed between frames
      const dt = timeStamp - this.lastUpdatedTime;
      const fps = 1000 / dt;

      console.log(`fps: ${fps}`);

      // clear the screen before drawing over it again
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw and update all the game sprites
      this.drawAndUpdateSprites(dt);

      // update the last updated time
      this.lastUpdatedTime = timeStamp;

      // keep requesting new frames
      window.requestAnimationFrame(gameLoop);
    }

    this.init = init;
    this.gameLoop = gameLoop;
  }

  // method to retrieve the html canvas
  initCanvas() {
    // get the html5 canvas and its context
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
  }

  // method to add sprites to the scene initally
  initScene() {
    // sprites to draw
    this.sprites = [];
    this.sprites.push(new Player(this.ctx));
  }

  // method to draw and update all the sprites present in the scene
  drawAndUpdateSprites(dt) {
    for(let i = 0; i < this.sprites.length; i++) {
      this.sprites[i].draw(dt);
      this.sprites[i].update(dt);
    }
  }
}

// run the game
new Game().init();
