var img;
function preload() {
  img = loadImage("768px-VAN_CAT.png");
}
function setup() {
  createCanvas(768,768);
  image(img,0,0);
  loadPixels();
  frameRate(24);
  // noStroke();
}
function draw() {
  var d = pixelDensity();
  var pxSz = 15;
  for(let y = 0; y < height; y+=pxSz) {
    for(let x = 0; x < width; x+=pxSz) {
      var index = 4 * ((y*d) * (width*d) + (x*d));
      var r = pixels[index];
      var g = pixels[index+1];
      var b = pixels[index+2];
      fill(r,g,b);
      var radius = 20;
      var movement = 0;
      if(x > mouseX-radius && x < mouseX+radius &&
         y > mouseY-radius && y < mouseY+radius) {
           movement = random(10);
           square(x+movement,y+movement,pxSz);
       }
    }
  }
}
function keyTyped() {
  image(img,0,0);
}