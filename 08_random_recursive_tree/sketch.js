/*
 * Repeat: Recursive Tree
 * from Form+Code in Design, Art, and Architecture
 * by Casey Reas, Chandler McWilliams, and LUST
 * Princeton Architectural Press, 2010
 * ISBN 9781568989372
 *
 * This program is based on Context Free program
 * "Foggy Tree by Chris Coyne:
 * http://www.contextfreeart.org/gallery/view.php?id=4
 *
 * Recreated in p5.js for LCC Prototyping Lab workshops by Gareth Foote
 */

var dotSize = 9;
var angleOffsetA;
var angleOffsetB;

function setup() {
  createCanvas( 900, 600 );

  noStroke();
  fill(245, 151, 176);
  smooth();
  // frameRate(1);  // Redraw the tree once a second
  noLoop();

  angleOffsetA = radians(1.5); // Convert 1.5 degrees to radians
  angleOffsetB = radians(50);  // Convert 50 degrees to radians
}

function draw() {
  background(0);                       // White background
  translate(width/2, height);          // Move to the center, bottom of the screen
  seed1(dotSize, radians(270), 0, 0);  // Start the tree
}

function seed1(dotSize, angle, x, y) {

  if (dotSize > 1.0) {
    // Create a random numbers between 0 and 1
    var r = random(0, 1.0);

    // 98% chance this will happen
    if (r > 0.02) {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle) * dotSize;
      var newy = y + sin(angle) * dotSize;
      seed1(dotSize * 0.99, angle - angleOffsetA, newx, newy);
    }
    // 2% chance this will happen
    else {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle);
      var newy = y + sin(angle);
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
      seed1(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed2(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    }
  }
}

function seed2(dotSize, angle, x, y) {

  if (dotSize > 1.0) {
    // Create a random numbers between 0 and 1
    var r = random(0, 1.0);

    // 95% chance this will happen
    if (r > 0.05) {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle) * dotSize;
      var newy = y + sin(angle) * dotSize;
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
    }
    // 5% chance this will happen
    else {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle);
      var newy = y + sin(angle);
      seed1(dotSize * 0.99, angle + angleOffsetA, newx, newy);
      seed2(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed1(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    }
  }
}
