/*
 * API Playground
 * @description Using APIs
 * @author Gareth Foote
 */

var results;

// This function runs before setup & draw ensuring that
// the weather variable is populated with data before
// setup & draw run.
function preload(){
  var city = "London";
  var url = 'http://api.apixu.com/v1/current.json?key=YOUR_API_KEY_HERE&q='+city;
  results = loadJSON(url);
}

function setup() {
  createCanvas( 200, 350 );
  noLoop();
}

function draw() {
  background( 225 );
  console.log(results);
}
