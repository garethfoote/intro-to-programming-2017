/*
 * Map - Using map to visualise the temperature from an API
 * @author Gareth Foote
 */

var weather;

// This function runs before setup & draw ensuring that
// the weather variable is populated with data before
// setup & draw run.
function preload(){
  var city = "London";
  // var city = "Cairo";
  // var city = "Dallol";
  // var city = "Yakutsk";
  var url = 'http://api.apixu.com/v1/current.json?key=787fd79445584c48aea130052171811&q='+city;
  weather = loadJSON(url);
}

function setup() {
  noLoop();
  createCanvas( 300, 600 );

  fill( 0 );
  noStroke();
  background( 225 );
  textFont( "monospace" );

  console.log( map(10, 0, 50, 0, 200) );
  console.log( map(35, 0, 50, 0, 200) );
}

function draw() {
  var ySpacing = height/7;

  // Get degrees centigrade from data object.
  var temperature = weather.current.temp_c;
  // Map this from one range to another
  var tempHeight = map( temperature, 0, 50, 0, ySpacing*5 );

  // Draw the thermostat red bar
  rectMode( CORNER )
  fill( 255, 0, 0 );
  rect( width/2-10, ySpacing, 20, tempHeight )

  // Draw thermostat notches
  fill( 0, 200 );
  rectMode( CENTER )
  for(var i = 1; i <= 6; i++){
    rect( width/2, ySpacing*i, 50, 20, 20 );
    text( 10*(i-1), (width/2)+50, ySpacing*i );
  }

  // Add temperature in top corner
  textSize(36);
  text( temperature + " C", 20, 50 )
}
