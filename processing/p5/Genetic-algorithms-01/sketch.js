
var img;
var population;
var running = true;
var fRate = 60;
var xShow;
var yShow;
function preload() {
  //preload the image
  img = loadImage("img/sample_09.jpg");
}
function setup() {
  createCanvas(1220, 600);
  var infoStr = "Image by Michael Myers. (found via Google)<br> Atempt to make a grey-scale reproduction of an image with random dots and squares" +
                " going through a genetic algorithm producing grey-scale color maps which regenerate, mutate, reincarnate and adapt." +
                " The code still needs more optimisation because pixel comparison is very slow as you can see and my algorithm is not the best." +
                " Unfortunately time is running out and I submitted it as it is.";


  var info = createP(infoStr);
  info.position(10, 405);

  background(255);
  var btn = createButton("Start/Pause");
  btn.mousePressed(toggleDraw);

  //where to show the result
  xShow = width - 400;
  yShow = 5;
  frameRate(fRate);

  //show the original image
  image(img, 5, 5);

  //load pixels once
  img.loadPixels();

  //create the population
  population = new Population(img);
  population.makeGeneration();
  population.display(410, 10);

  noFill();
  strokeWeight(2);
  //rect(width - 405, 5, 400, 400);
  //image(img, 0, 0);
}

function toggleDraw() {
  running = !running;
  if(running) {
    loop();
  } else {
    noLoop();
  }
}

function draw() {

  //just delete the color/greyscale maps - the result is incremental
  fill(255);
  noStroke();
  rect(410, 5, 400, height);

  //display the color/greyscale maps
  population.display(410, 10);
  //make the selection and reproduction
  population.selection();
  population.reproduction();

  //draw the result
  population.drawSpots(xShow, yShow);

}
