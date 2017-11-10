/*
 * Colour, Stroke & Fill
 * @author Gareth Foote
 */

function setup() {
  createCanvas( 800, 450 );
  background( 200 );
  strokeWeight( 4 );
}

function draw() {

  // Set stroke to black and fill to white
  stroke( 0, 0, 0 );
  fill( 225, 225, 225 );
  // Rectangle
  rect( 50, 50, 100, 100 );

  // Set stroke to white & fill to black
  stroke( 255, 255, 255 );
  fill( 0, 0, 0 );
  // Ellipse 1
  ellipse( 50, 50, 100 );
  // Ellipse 2
  ellipse( 350, 350, 100 );

  // Set stroke to black
  stroke( 0, 0, 0 );
  // Line
  line( 600, 20, 700, 250 )
  line( 700, 20, 600, 250 )

  // Triangle
  // Line
  // Arc
  // Quad
  // noStroke();

}
