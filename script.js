const canvas = document.getElementById("myCanvas");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 5;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let pos = Math.floor(gameFrame/staggerFrames) % 6
  console.log(pos)
  frameX = frameX * pos
  ctx.drawImage( playerImage,frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  gameFrame++
  requestAnimationFrame(animate);
}

animate();

