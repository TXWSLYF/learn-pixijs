import { Application, Loader, Sprite } from "pixi.js";

const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.
let cat, state;

// create a pixi application
const app = new Application({
  width: 512,
  height: 512,
  antialias: true,
  transparent: false,
  resolution: 1,
});
// add the canvas element to html document body
document.body.appendChild(app.view);

// load resources
loader.add("images/cat.png");
loader.load(setup);

function setup(loader, resources) {
  const texture = resources["images/cat.png"].texture;
  cat = new Sprite(texture);
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  //Set the game state
  state = play;

  //Start the game loop
  app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta: number) {
  //Update the current game state:
  state(delta);
}

function play(delta) {
  //Update the cat's velocity
  cat.vx = 1;
  cat.vy = 1;

  //Apply the velocity values to the cat's
  //position to make it move
  cat.x += cat.vx;
  cat.y += cat.vy;

  //Optionally use the `delta` value
  //cat.x += 1 + delta;
}
