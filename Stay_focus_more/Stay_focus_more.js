/*
 * @name Tickle
 * @description The word "tickle" jitters when the cursor hovers over.
 * Sometimes, it can be tickled off the screen.
 */
var message = "Stay focused",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 120,
  x, y; // x and y coordinates of the text

var a, b, c, d, e;

function preload() {
  font = loadFont('data/LeagueGothic-Regular.otf');
}

function setup() {
  createCanvas(500, 500);
   
  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 3 - bounds.w / 3;
  y = height / 2 - bounds.h / 10;
}

function draw() {
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  fill(300, 120, 40);
  rect(0, 0, width, height);

  // write the text in black and get its bounding box
  fill(30, 40, 100);
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 6);
    y += random(-5, 7);
  }
}