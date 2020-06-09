var img;
function preload() {
  img = loadImage("http://placekitten.com/g/768/768");
}
function setup() {
  createCanvas(768,768);
  image(img,0,0);
  loadPixels();
  frameRate(24);
  noStroke();
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
      var a = Math.floor(255 * random(1));
      fill(r,g,b,a);
      var radius = 50;
      if(x > mouseX-radius && x < mouseX+radius &&
         y > mouseY-radius && y < mouseY+radius) {
           let movement = random(-100, 100);
           circle(x+movement,y+movement,Math.floor(random(5, 25)));
       }
    }
  }
}
function keyTyped() {
  image(img,0,0);
}