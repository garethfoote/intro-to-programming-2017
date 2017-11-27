/*
 * Loops and Arrays - Using for loops to access array items
 * @author Gareth Foote
 */


var sizes = [ 20, 350, 80, 210 ];

function setup() {
  createCanvas( 800, 450 );
  background( 0 );
  noStroke();
}

function draw() {
  background( 0 );

  ellipse(50, 225, sizes[0]);
  ellipse(100, 225, sizes[1]);
  ellipse(150, 225, sizes[2]);
  ellipse(200, 225, sizes[3]);

  // TASK: Create a for loop and log each value in the sizes array.
  // TASK: Draw an ellipse inside the for loop for each size.

}
