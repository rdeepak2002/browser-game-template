// ensure all js is valid
'use strict';

const SCREEN_WIDTH = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const SCREEN_HEIGHT = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// class to represent the player
class Player {
  // constructor
  constructor(ctx) {
    this.position = {x: 0, y: 0};
    this.velocity = {x: 0.3, y: 0.3};
    this.dimensions = {width: 100, height: 100};
    this.ctx = ctx;
  }

  // method to draw the player
  draw(dt) {
    this.ctx.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
  }

  // method to update the player
  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    if(this.position.x + this.dimensions.width >= SCREEN_WIDTH || this.position.x <= 0) {
      this.velocity.x *= -1;
    }

    if(this.position.y + this.dimensions.height >= SCREEN_HEIGHT || this.position.y <= 0) {
      this.velocity.y *= -1;
    }
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
      // note: console.log in the update loop makes the game very laggy

      // get time elapsed between frames
      const dt = timeStamp - this.lastUpdatedTime;

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

    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;

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
