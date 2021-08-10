import { Application } from "pixi.js";

// create a pixi application
const app = new Application({ width: 256, height: 256 });
// add the canvas element to html document body
document.body.appendChild(app.view);

// set renderer backgroundColor
app.renderer.backgroundColor = 0x061639;

// resize
app.renderer.resize(512, 512);

// set canvas size to the window
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);