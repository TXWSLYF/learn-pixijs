import { Application, Loader, Sprite, Rectangle } from "pixi.js";

const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.

// create a pixi application
const app = new Application({ width: 256, height: 256 });
// add the canvas element to html document body
document.body.appendChild(app.view);

loader.add("images/tileset.png").load((loader, resources) => {
  const texture = resources["images/tileset.png"].texture;

  // Create a rectangle object that defines the position and
  // size of the sub-image you want to extract from the texture
  const rectangle = new Rectangle(192, 128, 64, 64);

  //Tell the texture to use that rectangular section
  texture.frame = rectangle;

  //Create the sprite from the texture
  const rocket = new Sprite(texture);

  //Position the rocket sprite on the canvas
  rocket.x = 32;
  rocket.y = 32;

  //Add the rocket to the stage
  app.stage.addChild(rocket);

  //Render the stage
  app.renderer.render(app.stage);
});
