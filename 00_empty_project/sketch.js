/*
 * An empty p5.js project
 * @author Write your name here.
 */



function setup() {
  var date = new Date();
  console.log( "Hello World", date.toDateString() );
}

function draw() {
  background( 200 );
  text( frameCount, 0, 10 );
}
