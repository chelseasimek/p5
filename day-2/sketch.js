let counter = 0;
function setup() {
  // put setup code here
  createCanvas(600, 900);
  background('#F9E4B7');
}

function draw() {
  // put drawing code here
  while(counter < 300) {
    counter++;
    // 5 colors
    let colors = [
      color('#98FB98'),
      color('#add8e6'),
      color('#ffa500'),
      color('#000080'),
      color('#000000'),
    ]

    // random ellipes
    fill(colors[Math.floor(random(0, colors.length))]);
    ellipse(random(0, 900), random(0, 900), random(1, 6), random(1, 6));

    // random weights
    noFill();
    stroke(colors[Math.floor(random(0, colors.length))]);
    strokeWeight(random(0.75, 6));
    curve(random(0, 900), random(0, 900),random(0, 900),random(0, 900), random(0, 900), random(0, 900), random(0, 900), random(0, 900), random(0, 900), random(0, 900), random(0, 900), random(0, 900));
  }
}