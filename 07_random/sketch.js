/*
 * Random - Also covering declaring, assigning & using variables in different places
 * @author Gareth Foote
 */

// Declare our intent to use theses variables.
var positionX;
var positionY;

function setup() {
  createCanvas(800, 450);
  // TASK: Assign a value to the variables using random()
  positionX = width/2;
  positionY = height/2;
  frameRate(10);
}

function draw() {
  // Background with an alpha of 25%
  background(0, 128);

  // Use variables to set X & Y of this ellipse
  ellipse(positionX, positionY, 10, 10);

  // Task: Change position X & Y using variables using a random() number
  // positionX = ???

  // Task: Change another feature of the shape with random
}
