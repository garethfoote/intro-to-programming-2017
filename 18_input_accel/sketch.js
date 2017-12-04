/*
 * Input accelerometer
 * @description Using the webcam to capture images.
 * @author Gareth Foote
 */

function setup(){
  createCanvas( 800, 450 );
  colorMode( HSB );
  noStroke();
}

function draw(){

  background(0);

  var colour = map(rotationX, -180, 180, 0, 360);
  var brightness = map(rotationY, -90, 90, 0, 100);
  var columnWidth = width/3;

  fill(colour, 100, brightness);
  rect(columnWidth*0, 0, columnWidth, height);

  fill(colour, 100, brightness*0.66666);
  rect(columnWidth*1, 0, columnWidth, height);

  fill(colour, 100, brightness*0.33333);
  rect(columnWidth*2, 0, columnWidth, height);

  fill( 0 );
  textSize( 50 );
  text("X " + rotationX, 20, 100);
  text("Y " + rotationY, 20, 200);
}
