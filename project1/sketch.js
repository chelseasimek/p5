/**
 * Chelsea Simek
 * SDEG - 600
 * Project 1
 *
 * I am planning to create a single page application. My project is going
 * to resemble the childrens song of "Old McDonald Had a Farm". It allows
 * users to click and add different animals to their farm, similar to the
 * song. I will use fuctions to create static assets like the farm itself
 * and different animals that can be placed around the farm.
 * Using built in functionality of P5, I plan on checking where users
 * click on the canvas and randomly generate that animal somewhere on the
 * farm.
 */
let colors;
function setup() {
  // put setup code here
  colors = {
    farm: {
      sky: color('#ABEEFF'),
      clouds: color('#FFFFFF'),
      fence: color('#F4F4F4'),
      grass: color('#3BA27E'),
    },
    panel: {
      background: color('#242424')
    },
    pig: {
      body: color('#E6C3D6'),
      nose: color('#C58BAB')
    },
    general: {
      white: color('#FFFFFF'),
      black: color('#000000')
    }
  };
  createCanvas(1920, 1280);
  ellipseMode(CORNER);
  createFarm();
  createAnimalPanel();
}

function draw() {

}

function mousePressed () {

}

function mouseReleased () {

}

function createFarm() {
  noStroke();
  // sky
  fill(colors.farm.sky);
  rect(0, 0, 1450, 1100);

  // grass
  fill(colors.farm.grass);
  rect(0, 1100, 1450, 175);

  createFence();
}

function createFence() {
  fill(colors.farm.fence);
  // posts
  let postX = 60;
  let postW = 50;
  for (let i = 0; i < 3; i++) {
    rect(postX, 885, postW, 285);
    postX += (postW * i) + 600;
  }

  // panels
  let panelY = 935;
  let postH = 50;
  for (let i = 0; i < 2; i++) {
    rect(0, panelY, 1450, postH);
    panelY += postH + 55;
  }
}

function createAnimalPanel() {
  noStroke();
  fill(colors.panel.background);
  rect(1490, 40, 395, 1200, 35);

  let animals = [ 'Pig', 'Chick', 'Horse', 'Cow' ];
  let box = { x: 1528, y: 75, w: 315, h: 245 }

  animals.forEach(animal => {
    noFill();
    stroke(colors.general.white);
    strokeWeight(12);
    window[`${animal}Box`] = rect(box.x, box.y, box.w, box.h, 35);
    window[`draw${animal}`](box.x + 45, box.y + 45);
    box.y += box.h + 50;
  });

  // drawPig(510, 510);
}

function drawPig(x, y) {
  noStroke();
  fill(colors.pig.body);
  // ears
  triangle(x + 10, y + 25, x + 10, y, x + 50, y + 25);
  triangle(x + 60, y + 25, x + 90, y, x + 80, y + 25);

  // body
  ellipse(x, y + 10, 90, 90);

  // legs
  ellipse(x + 55, y + 53, 150, 85);
  ellipse(x + 53, y + 95, 25,60);
  ellipse(x + 84, y + 105, 25, 55);
  ellipse(x + 155, y + 105, 25, 55);
  ellipse(x + 186, y + 95, 25, 60);

  // nose & eyes
  fill(colors.pig.nose);
  ellipse(x + 25, y + 62, 40, 25);
  fill(colors.general.black);
  ellipse(x + 25, y + 43, 15, 15);
  ellipse(x + 50, y + 43, 15, 15);

  // tail
  noFill();
  stroke(colors.pig.body);
  strokeWeight(6);
  let tailStart = { x: 200, y: 90 }
  bezier(
    x + tailStart.x,
    y + tailStart.y,
    x + tailStart.x + 40,
    y + tailStart.y + 35,
    x + tailStart.x + 20,
    y + tailStart.y + 15,
    x + tailStart.x + 25,
    y + tailStart.y + 5);
}

function drawChick(x, y) {  }

function drawHorse(x, y) {  }

function drawCow(x, y) {  }