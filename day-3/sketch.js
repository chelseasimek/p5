CLASS 3 CODE
function setup() {
  createCanvas(1080,720);
  background(0,0,255);
  noStroke();
  noLoop();
}
function draw() {
  // a geometric landscape
  // sky gradient - sunrise
  // from deep purple to red
  var c1 = color("#36317C");
  var c2 = color("#EDA828");
  var ellipseW = 1500;
  var numEllipses = ellipseW/2;
  for(var i=0; i<numEllipses; i++){
    fill(lerpColor(c1,c2,i/numEllipses));
    ellipse(width/2, 2*(height/3)-frameCount*3, ellipseW, ellipseW);
    ellipseW -= (ellipseW/numEllipses)*3;
    // console.log(i + " " + ellipseW)
  }
  // land
  fill("#5A9A31");
  rect(0, 2*(height/3), width, height/3);
  // mountains
  var numMountains = 20;
  for(var i = 0; i<numMountains; i++){
    fill(random(64,192)+i*2);
    var ybottom = 2*(height/3);
    var ytop = random(height/(i*3),ybottom);
    var x1 = random(width);
    var x2 = x1 + random(width/5,width/3);
    var x3 = x1 + (x2-x1)/2;
    triangle(x1,ybottom,x2,ybottom,x3,ytop);
  }
  // trees
  // a river
  // a sun
  // birds
}