/*
 * Conditionals 01 - Bouncing ball, simple conditionals
 * @author Gareth Foote
 */

var speed = 3;
var positionX = 0;

function setup() {
  createCanvas(800, 450);
  stroke(255);
  background(0);
}

function draw(){
  // instead of clear() we use background to reset to black on each draw().
  background(0);

  // Draw an ellipse of certain colour
  fill(255, 255, 0);
  ellipse(positionX, height/2, 20);

  // Increase position every time draw is called.
  positionX = positionX + speed;

  if(positionX > width){
    // TASK: Modify the code inside this conditional to make the
    // ball bounce off the right side of the canvas
    positionX = 0;
  }

  // TASK: Use another conditional to make the ball bounce off both walls
  // TASK: Change the colour, size, speed (accelerate) of the ball
  // TASK: Move up and down instead of left and right

  // Put a message on screen to show current speed.
  noStroke();
  textSize(30);
  text("SPEED:" + speed, 10, 30);
}
