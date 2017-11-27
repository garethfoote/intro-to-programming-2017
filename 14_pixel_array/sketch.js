/*
 * Pixel array
 * @description Looping the pixel array and adding colour values
 * @author Gareth Foote
 */

function setup() {
  createCanvas( 600, 500 );
  pixelDensity( 1 );
}

function draw() {
  background(0);

  // Load pixels so they can be accessed
  loadPixels();

  for ( var x = 0; x < width; x++ ) {
    for ( var y = 0; y < height; y++ ) {
      // Get the pixel at x and y position
      var index = (x + y * width) * 4;
      pixels[index] = 255;     // red
      pixels[index+1] = 255;   // green
      pixels[index+2] = 255;   // blue
      pixels[index+3] = 255;   // alpha
    }
  }

  // Update the pixel array so it can be drawn again.
  updatePixels();

  // TASK:  Change the RGBA values of the pixels inside the nested for loop
  // TASK:  Try using the `random()` function to set the colour values
  // TASK:  Try using the `x` and `y` variables to set the colour values
}
