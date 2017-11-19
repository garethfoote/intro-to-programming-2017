/*
 * Animation
 * @author Gareth Foote
 */

var positionX = 0;

function setup() {
  createCanvas(800, 450);
  rectMode( CENTER );
}

function draw(){
  // Set the background to black every frame
  background(0);

  // Draw a rectangle that moves along the X axis
  rect(positionX, height/2, 10, 10);

  // Increase the value stored in postitionX
  positionX = positionX + 1;

  // TASK: Finish this conditional statement to move the rect back to 0.
  if(positionX > width){
    // ????
  }

  // TASK: Increase the speed of the rectangle
  // TASK: Move the rectange on the Y axis as well as the X
}
