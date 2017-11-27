/*
 * Image pixel array
 * @description Looping through image pixel array and modifying colour values
 * @author Gareth Foote
 */

var img;

function preload() {
  img = loadImage("images/maxernst.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  noLoop();
}

function mouseDragged(){
  var index = (mouseX + mouseY * width)*4;

  img.loadPixels();
  var r = img.pixels[index];
  var g = img.pixels[index+1];
  var b = img.pixels[index+2];
  var a = img.pixels[index+3];

  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 40, 40);
}

function mouseReleased() {
  image(img, 0, 0);
}

function draw() {

  img.loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var r = img.pixels[index];
      var g = img.pixels[index+1];
      var b = img.pixels[index+2];
      var a = img.pixels[index+3];

      // img.pixels[index] = r;
      // img.pixels[index+1] = 255;
      // img.pixels[index+2] = b;
      // img.pixels[index+3] = a;
    }
  }
  // Update the pixel array so it can be drawn again.
  img.updatePixels();
  // Rendering it back onto the canvas.
  image(img, 0, 0);
}
