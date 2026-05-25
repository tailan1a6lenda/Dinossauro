function setup() {
  createCanvas(400, 400);
}
let LocalDinoX = 50
let LocalDinoY = 200
let Personagens = ["🦖", "👨"]
function draw() {
  background(220)
desenhaFundo()
desenhaPersonagem()
seBater ()
keyReleased ()
}
function desenhaFundo() {
    fill("white")
rect(0, 0, 220, 20);
rect(0, 380, 240, 20);
  fill('green')
rect(220, 0, 400, 400);
}
function desenhaPersonagem() {
textSize(40)
 text(Personagens[0], LocalDinoX, LocalDinoY)
 textSize(20)
 text(Personagens[1], 300, 200)
}
function keyReleased() {
    if (key == "d") {
    LocalDinoX += 5;
    second(2);
  }
  if (key == "a") {
    LocalDinoX -= 5;
    second(2);
  }
  if (key == "w") {
    LocalDinoY -= 5;
    second(2);
  }
  if (key == "s") {
    LocalDinoY += 5;
    second(2);
}
}
function seBater () {
  fill("Black");
  if (LocalDinoX > 400) {
    text("Perdeu o Humano!", 80, 200);
    noLoop();
  }
  if (LocalDinoY > 400) {
  text("Perdeu o Humano!", 80, 200);
  noLoop();
  }
    if (LocalDinoY < 1) {
  text("Perdeu o Humano!", 80, 200);
  noLoop();
  }
        if (LocalDinoX < 1) {
  text("Perdeu o Humano!", 80, 200);
  noLoop();
  }
}
function pegueiEle () {
}