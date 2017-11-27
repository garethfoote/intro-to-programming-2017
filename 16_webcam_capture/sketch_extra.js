/*
 * Webcam capture
 * @description Using the webcam to capture images.
 * @author Gareth Foote
 */

var capture;
var count = 1;

var cameraResolution = 4/3;
var h = 300;
var camWidth = h*cameraResolution;

function setup() {
  createCanvas(camWidth, h);
  pixelDensity(1);

  // Create video capture object.
  capture = createCapture(VIDEO);
  capture.size(camWidth, height);
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

function saveCanvasArea(sx, sy, swidth, sheight, filename){
  loadPixels();
  // Make a copy of the whole canvas in an image object/canvas.
  var canvasImg = createImage(width, height);
  canvasImg.loadPixels();
  for (i = 0; i < pixels.length; i++) {
    canvasImg.pixels[i] = pixels[i];
  }
  canvasImg.updatePixels();

  // Copy the specified area of the snapshot and save the image.
  var snapshot = createImage(swidth, sheight);
  snapshot.copy(canvasImg, sx, sy, swidth, sheight, 0, 0, swidth, sheight);
  snapshot.save(str(filename) || "snapshot", "jpg");
}
