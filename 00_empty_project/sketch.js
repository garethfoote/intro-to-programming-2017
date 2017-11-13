/*
 * An empty p5.js project
 * @author Write your name here.
 */
var count = 0;
var date = new Date()

function setup() {
  console.log( "Hello World", date.toDateString() );
}

function draw() {
  background(200);
  text(frameCount, 0, 10);
}
