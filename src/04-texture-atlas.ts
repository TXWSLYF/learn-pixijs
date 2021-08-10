import { Application, Loader, Sprite } from "pixi.js";

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

loader.add("images/treasureHunter.json");

loader.load((loader, resources) => {
  const treasureHunterTextures =
    resources["images/treasureHunter.json"].textures;

  // 地牢
  const dungeon = new Sprite(treasureHunterTextures["dungeon.png"]);
  app.stage.addChild(dungeon);

  const treasure = new Sprite(treasureHunterTextures["treasure.png"]);
  treasure.x = app.stage.width - treasure.width - 48;
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  app.stage.addChild(treasure);

  const door = new Sprite(treasureHunterTextures["door.png"]);
  door.position.set(32, 0);
  app.stage.addChild(door);

  const numberOfBlobs = 6,
    spacing = 48,
    xOffset = 150;

  for (let i = 0; i < numberOfBlobs; i++) {
    //Make a blob
    const blob = new Sprite(treasureHunterTextures["blob.png"]);

    //Space each blob horizontally according to the `spacing` value.
    //`xOffset` determines the point from the left of the screen
    //at which the first blob should be added.
    let x = spacing * i + xOffset;

    //Give the blob a random y position
    //(`randomInt` is a custom function - see below)
    let y = randomInt(0, app.stage.height - blob.height);

    //Set the blob's position
    blob.x = x;
    blob.y = y;

    //Add the blob sprite to the stage
    app.stage.addChild(blob);
  }

  const explorer = new Sprite(treasureHunterTextures["explorer.png"]);
  explorer.x = 68;
  explorer.y = app.stage.height / 2 - explorer.height / 2;
  app.stage.addChild(explorer);
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
