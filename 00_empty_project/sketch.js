/*
 * An (almost) empty P5.js sketch
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
