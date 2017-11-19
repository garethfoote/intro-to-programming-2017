/*
 * Map - Using a map function
 * @author Gareth Foote
 */

function setup() {
  createCanvas(800, 450);
  background(0);
  noStroke();
  // Change the colorMode to HSB to make it easier to
  // transition the saturation & brightness of a colour.
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);

  var colour = map(mouseX, 0, width, 0, 360);
  var columnWidth = width/3;

  fill(colour, 100, 100);
  rect(columnWidth*0, 0, columnWidth, height);

  fill(colour, 80, 70);
  rect(columnWidth*1, 0, columnWidth, height);

  fill(colour, 60, 40);
  rect(columnWidth*2, 0, columnWidth, height);
}
