import { Application, Text, TextStyle } from "pixi.js";
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

const style = new TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  stroke: "#ff3300",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
});
const message = new Text("Hello Pixi!", style);
message.position.set(54, 96);

// change the text
message.text = "Text changed!";

// redefine the style
message.style = { fill: "white", fontFamily: "PetMe64" };

// 控制换行
message.style = {
  fill: "white",
  wordWrap: true,
  wordWrapWidth: 100,
  align: "center",
};

app.stage.addChild(message);
