/*
 * Simple Interaction
 * @author Gareth Foote
 */
function setup() {
  createCanvas( 800, 450 );
  background(0);
}

function draw() {

  // Make sure the first two params of ellipse() are the top left corner.
  ellipseMode( CORNER );

  // Make the size of the ellipse follow position of mouse.
  ellipse(mouseX, mouseY, 10, 10);

}
