/*
 * Variables (built in)
 * @author Gareth Foote
 */
function setup() {
  createCanvas( 800, 450 );
  background( 0 );
}

function draw() {

  rectMode(CENTER);
  // The rectangle position is half of the canvas and it's size
  // is set by the mouse position.
  // TASK: Change the arguments so that the rect follows the position of the mouse
  rect(width/2, height/2, mouseX, mouseY);

}
