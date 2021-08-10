import { Application, Loader, Sprite } from "pixi.js";

const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.
// or
// const loader = new Loader(); // create a new pixi loader

// create a pixi application
const app = new Application({ width: 256, height: 256 });
// add the canvas element to html document body
document.body.appendChild(app.view);

loader.add("images/cat.png");

loader.load((loader, resources) => {
  // create a sprite
  const cat = new Sprite(resources["images/cat.png"].texture);

  // Change the sprite's position
  cat.x = 96;
  cat.y = 96;

  // Change the sprite's size
  cat.width = 80;
  cat.height = 120;

  // Change the sprite's scale
  cat.scale.x = 2;
  cat.scale.y = 2;

  // Change the sprite's rotation
  cat.rotation = 0.5;

  // 改变图片锚点
  cat.anchor.x = 0.5;
  cat.anchor.y = 0.5;

  // TODO: what's the difference between anchor and pivot?
  cat.pivot.set(32, 32)

  // add the sprite to stage
  app.stage.addChild(cat);
});

loader.onProgress.add((loader, resource) => {
  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url);

  //Display the percentage of files currently loaded
  console.log("progress: " + loader.progress + "%");
});
