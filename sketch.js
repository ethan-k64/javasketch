/*
*Made By Ethan Knotts
*Please don't steal my code.
*/

// Variables
let value = [0, 0, 0];
let trans;
let saveButton;
let clearButton;
let thick;
let slider;
let rslider;
let gslider;
let bslider;
let tslider;
let colShow;
let canDimensions = 600;

let r;
let g;
let b;
let a;
let s;

function setup() {
  // Canvas Props
  const cnv = createCanvas(canDimensions, canDimensions);
  cnv.position(displayWidth / 2 - 300, displayHeight / 2 - 450);
  cnv.drop(gotFile);
  
  // Console
  console.log(`Made By Ethan Knotts`);
  console.log(`Display Width: ${displayWidth}`);
  console.log(`Display Height: ${displayHeight}`);

  // Extra Props
  ellipseMode(RADIUS);
  rectMode(CENTER);

  // Config Props
  fill(value[0], value[1], value[2]);

  saveButton = createButton('Save');
  saveButton.mousePressed(saveDrawing);
  saveButton.position(displayWidth / 2 - 30, displayHeight / 2 + 200);

  clearButton = createButton('Clear');
  clearButton.mousePressed(clearCanvas);
  clearButton.position(displayWidth / 2 + 20, displayHeight / 2 + 200);

  slider = createSlider(1, 100, 5, 1);
  slider.position(displayWidth / 2 - 50, displayHeight / 2 + 250);

  rslider = createSlider(0, 255, 0, 1);
  rslider.position(displayWidth / 6.5, displayHeight / 2 - 300);

  gslider = createSlider(0, 255, 0, 1);
  gslider.position(displayWidth / 6.5, displayHeight / 2 - 200);

  bslider = createSlider(0, 255, 0, 1);
  bslider.position(displayWidth / 6.5, displayHeight / 2 - 100);

  tslider = createSlider(0, 255, 255, 1);
  tslider.position(displayWidth / 6.5, displayHeight / 2);

  r = createP();
  r.position(displayWidth / 6.5, displayHeight / 2 - 335);
  r.style('color', color(255, 0, 0));

  g = createP();
  g.position(displayWidth / 6.5, displayHeight / 2 - 235);
  g.style('color', color(0, 255, 0));

  b = createP();
  b.position(displayWidth / 6.5, displayHeight / 2 - 135);
  b.style('color', color(0, 0, 255));

  a = createP();
  a.position(displayWidth / 6.5, displayHeight / 2 - 35);
  a.style('color', color(255));

  s = createP();
  s.position(displayWidth / 2 - 25, displayHeight / 2 + 220);
  s.style('color', color(255));
}


function draw() {
  // Drawing Props
  thick = slider.value();
  strokeWeight(thick);

  value[0] = rslider.value();
  value[1] = gslider.value();
  value[2] = bslider.value();

  trans = tslider.value();

  stroke(value[0], value[1], value[2], trans);
  
  // Text Props
  r.html(`Red: ${value[0]}`);
  g.html(`Green: ${value[1]}`);
  b.html(`Blue: ${value[2]}`);
  a.html(`Alpha: ${trans}`);
  s.html(`Thickness: ${thick}`);

  // Drawing
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // Call Functions
  borders();
}


// Functions
function saveDrawing() {
  fill(51);
  rect(0, 200, 2, 800);
  rect(600, 200, 2, 800);
  rect(300, 600, 600, 2);
  rect(300, 0, 600, 2);
  save('drawing.png');
}

function clearCanvas() {
  background(51);
}

function gotFile(file) {
  let img = createImg(file.data, "userImage");
  img.hide();
  
  image(img, 0, 0, width, height);
}

function borders() {
  fill(value[0], value[1], value[2]);
  noStroke();

  rect(0, 200, 2, 800);
  rect(600, 200, 2, 800);
  rect(300, 600, 600, 2);
  rect(300, 0, 600, 2);
}
