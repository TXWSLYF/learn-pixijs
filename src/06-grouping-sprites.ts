import { Application, Loader, Sprite, Container } from "pixi.js";

const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.

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

loader.add(["images/cat.png", "images/door.png", "images/explorer.png"]);

loader.load((loader, resources) => {
  const cat = new Sprite(resources["images/cat.png"].texture);
  cat.position.set(100, 100);

  const door = new Sprite(resources["images/door.png"].texture);

  const explorer = new Sprite(resources["images/explorer.png"].texture);
  explorer.position.set(50, 50);

  const container = new Container();
  container.addChild(cat);
  container.addChild(door);
  container.addChild(explorer);

  console.log(container.children);
  console.log(container.width, container.height);
  container.width = 300;
  container.height = 300;
  container.position.set(20, 20);

  // child's x is relative from parent
  console.log(cat.x);

  // get global position relative to the top left corner of the stage
  console.log(container.toGlobal(cat.position));
  console.log(cat.parent.toGlobal(cat.position));

  // caculate the distance between cat and explorer
  console.log(cat.toLocal(cat.position, explorer));

  app.stage.addChild(container);
});
