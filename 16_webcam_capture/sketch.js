/*
 * Webcam capture
 * @description Using the webcam to capture images.
 * @author Gareth Foote
 */

var capture;

function setup() {
  createCanvas(400, 300);
  pixelDensity(1);

  // Create video capture object.
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  clear();
  capture.loadPixels();
  for ( var x = 0; x < width; x++ ) {
    for ( var y = 0; y < height; y++ ) {
      // Get the pixel at x and y position
      var index = (x + y * width) * 4;
      // capture.pixels[index] = 255;     // red
      // capture.pixels[index+1] = 255;   // green
      // capture.pixels[index+2] = 255;   // blue
      // capture.pixels[index+3] = 255;   // alpha
    }
  }
  capture.updatePixels();
  image(capture, 0, 0, width, height);
}

function keyPressed(){
  if (keyCode == RETURN) {
    saveCanvas("webcam", "jpg");
  }
}
