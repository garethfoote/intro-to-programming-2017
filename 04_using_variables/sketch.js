/*
 * Using variables
 * @author Gareth Foote
 */

// This variable is available in all functions
var count = 0;

function setup() {
  createCanvas( 800, 450 )

  noStroke();
  textSize(30);
  textFont("monospace");

  // These variables are available in the setup function only
  var rectWidth = 5;
  var rectHeight = 7;
  var rectArea = rectWidth * rectHeight;
  console.log(rectArea); // Writes area to the console
}

function draw(){
  clear();

  // Increase the value stored in postitionX
  count = count + 1;
  console.log( count );
  text("COUNT: " + count, 10, 30);
}
