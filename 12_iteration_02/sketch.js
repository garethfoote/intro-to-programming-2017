/*
 * Iteration 02 - Using the "for" structure to construct repetitive forms.
 * @author Gareth Foote
 */

function setup() {
  createCanvas( 800, 450 );
  frameRate( 5 );
  colorMode( HSB );
  noStroke();
}

function draw() {
  background( 0 );

  var numRects = 10;
  var rectSpreadX = width/numRects;
  var colourSpreadX = 360/numRects;

  var xPos = 0;
  for( var i = 0; i < numRects; i++ ){

    // Draw a rectangle
    fill( i*colourSpreadX, 100, 100 );
    rect( i*rectSpreadX, 0, rectSpreadX, height );

    // Write the 'i' variable on screen
    fill( 255 );
    text( i, i*rectSpreadX, 10 );

    // Move the x position on 30 pixels
    xPos += 30;

  }

  // Task: Use the `i` variable to set the xPos on each iteration
  // Task: Spread the rectangles evenly across the width
  // Task: Change the colour of each rectangle proportionately to the `i` variable
}
