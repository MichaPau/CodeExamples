var f1 = 440;
var f2 = 440;
var f3 = 440;
var f4 = 220;
var p1 = 1;
var p2 = 1;
var p3 = 1;
var p4 = 1;
var a1 = 100;
var a2 = 100;
var a3 = 100;
var a4 = 100;
var d1 = 0;
var d2 = 0;
var d3 = 0;
var d4 = 0;

var f1Slider;
var f2Slider;
var f3Slider;
var f4Slider;
var p1Slider;
var p2Slider;
var p3Slider;
var p4Slider;
var a1Slider;
var a2Slider;
var a3Slider;
var a4Slider;
var d1Slider;
var d2Slider;
var d3Slider;
var d4Slider;
var t=1;

function setup() {
  //var x = pow((a1*sin(t*f1 + p1)*Math.e), -(d1*t) + pow((a2*sin(t*f2 + p2)*Math.e), -(d2*t);
  createCanvas(400, 400);

  f1Slider = createSlider(0, 1000, 100, 1);
  f1Slider.position(10, height+10);
  //f2Slider = createSlider(0, 1000, 100, 1);
  //f2Slider.position(10, height+30);
  f3Slider = createSlider(0, 1000, 100, 1);
  f3Slider.position(10, height+50);
  //f4Slider = createSlider(0, 1000, 100, 1);
  //f4Slider.position(10, height+70);
  p1Slider = createSlider(0, 250, 100, 1);
  p1Slider.position(150, height+10);

  p3Slider = createSlider(0, 250, 100, 1);
  p3Slider.position(150, height+50);

  a1Slider = createSlider(0, 500, 100, 1);
  a1Slider.position(300, height+10);

  a3Slider = createSlider(0.0, 0.1, 0.05, 0.01);
  a3Slider.position(300, height+50);

  d1Slider = createSlider(0.0, 0.1, 0.05, 0.01);
  d1Slider.position(450, height+10);

  d3Slider = createSlider(0.0, 0.1, 0.05, 0.01);
  d3Slider.position(450, height+50);

  background(0);
  frameRate(30)
  strokeWeight(1);
  stroke("#FFFFFF");
  noFill();

  var test = MySlider("myvar", "testslider:", 10, height+100, 1, 100, 50, 1);
}


function draw() {
  background(0);
  translate(width/2, height/2);
  //var x = pow(Math.E, (d1*t*-1))*sin(t*f1+p1) + pow(Math.E, (d2*t*-1))*sin(t*f2+p2);
  //var y = pow(Math.E, (d3*t*-1))*sin(t*f3+p3) + pow(Math.E, (d4*t*-1))*sin(t*f4+p4);
  //point(x*100,y*100);
  f1 = f1Slider.value();
  //f2 = f2Slider.value();
  f3 = f3Slider.value();
  p1 = p1Slider.value();
  p3 = p3Slider.value();
  a1 = a1Slider.value();
  a3 = a3Slider.value();
  d1 = d1Slider.value();
  d3 = d3Slider.value();
  //f4 = f4Slider.value();
  beginShape();
  for(var t=1; t < 1500; t++) {
    var x = pow(Math.E, (d1*t*-1))*sin(t*f1+p1);
    var y = pow(Math.E, (d3*t*-1))*sin(t*f3+p3);
    //var x = pow(Math.E, (d1*t*-1))*sin(t*f1+p1) + pow(Math.E, (d2*t*-1))*sin(t*f2+p2);
    //var y = pow(Math.E, (d3*t*-1))*sin(t*f3+p3) + pow(Math.E, (d4*t*-1))*sin(t*f4+p4);
    vertex(x*100, y*100);
    //point(x*100,y*100);
  }
  endShape(CLOSE);
  //t += 1;

  //console.log(x);
}
