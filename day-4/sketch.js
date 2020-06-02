// Class 4 code
function setup() {
  createCanvas(720,1080);
  background("#ffffff") // or color(255,255,255)  or "white"  or just 255
  // noLoop();
  // noFill();
  noStroke();
  frameRate(1);
}
function draw() {
  background(255,255,255,128) // or color(255,255,255)  or "white"  or just 255
  // random num squares in one row
  var numSquares = Math.floor(random(20,20));
  var boxSize = width / numSquares;
  var numRows = height / boxSize;
  for(var j = 0; j < numRows-1; j++) {
    for(var i = 1; i < numSquares-1; i++) {
      var x = boxSize * i;
      var y = boxSize * j;
      var a = random((j/numRows)*-PI/3,(j/numRows)*PI/3);
      //  0  1  2  3  4  ... numSquares
      //  ----------------------
      //  |  |  |  |  |  |  |  |
      //  ----------------------
      //  '--' = boxSize
      push();
      translate(x,y);
      rotate(a);
      var colorChoice = Math.floor(random(3));
      if( colorChoice == 0 ) {
        fill(255,0,0,128);
      } else if( colorChoice == 1 ) {
        fill(255,255,0,128);
      } else if( colorChoice == 2 ) {
        fill(0,0,255,128);
      } else {
        Console.log("Error invalid colorChoice!");
      }
      var shapeChoice = Math.floor(random(2*(j/numRows)));
      if( shapeChoice == 0 ) {
        square(0,0,boxSize);
      }
      // else if( shapeChoice == 1) {
      //   triangle(0,boxSize,boxSize/2,0,boxSize,boxSize)
      // }
      else {
        circle(0,0,boxSize);
      }
      pop();
    }
  }
}