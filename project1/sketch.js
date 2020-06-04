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
 * My appliation aims to have a fun light hearted tone to it, with the animals
 * and farm itself designed to be very blocky in sytle, similar to if it was taken
 * out of a childrens illustration style.
 * Using built in functionality of P5, I plan on checking where users
 * click on the canvas and randomly generate that animal somewhere on the
 * farm.
 */
let colors, animals, selector;
function setup() {
  // put setup code here
  colors = {
    farm: {
      sky: color('#ABEEFF'),
      clouds: color('#FFFFFF'),
      fence: color('#F4F4F4'),
      house: color('#CD7777'),
      grass: color('#3BA27E'),
    },
    panel: {
      background: color('#242424')
    },
    pig: {
      body: color('#E6C3D6'),
      nose: color('#C58BAB')
    },
    chick: {
      body: color('#FFEC9F'),
      beak: color('#FFC293'),
      legs: color('#FFC293')
    },
    horse: {
      body: color('#896E66'),
      mane: color('#000000')
    },
    sheep: {
      body: color('#FFFFFF'),
      head: color('#000000'),
      ears: color('#3E3E3E'),
      legs: color('#000000'),

    },
    general: {
      white: color('#FFFFFF'),
      grey: color('#F2F2F2'),
      black: color('#000000')
    }
  };
  selector = {x: 1528, y: 75, w: 315, h: 245};
  animals = [ 'Pig', 'Chick', 'Horse', 'Sheep' ];
  createCanvas(1920, 1280);
  ellipseMode(CORNER);
  createFarm();
}

function draw() {
  createAnimalPanel();
  let { animal, y } = getSelected(pmouseX, pmouseY);
  if (animal && y) {
    window[`draw${animal}Selector`](selector.x, y, true);
  }
}

function mousePressed () {
  createAnimalPanel();
  let { animal } = getSelected(pmouseX, pmouseY);
  if (animal) {
    window[`draw${animal}`](random(1125), random(920, 1135));
  }
}

function getSelected(x, y) {
  if (x > 1528) {
    if (y >= 75 && y <= 320 ) {
      return {
        animal: 'Pig',
        y: 75
      }
    }
    else if (y >= 370 && y <=615) {
      return {
        animal: 'Chick',
        y: 370
      }
    }
    else if (y >= 665 && y <=910) {
      return {
        animal: 'Horse',
        y: 665
      }
    }
    else if (y >= 960 && y <= 1205) {
      return {
        animal: 'Sheep',
        y: 960
      }
    }
    else return {};
  }
  else return {};
}

function createFarm() {
  noStroke();
  // sky
  fill(colors.farm.sky);
  rect(0, 0, 1450, 1080);

  // farm
  fill(colors.farm.house);
  ellipse(-175, 495, 455, 415);
  rect(0, 693, 280, 453);

  // grass
  fill(colors.farm.grass);
  rect(0, 1080, 1450, 200);

  createFence();
}

function createFence() {
  fill(colors.farm.fence);
  // posts
  let postX = 60;
  let postW = 50;
  for (let i = 0; i < 3; i++) {
    rect(postX, 850, postW, 285);
    postX += (postW * i) + 600;
  }

  // panels
  let panelY = 885;
  let postH = 50;
  for (let i = 0; i < 2; i++) {
    rect(0, panelY, 1450, postH);
    panelY += postH + 55;
  }
}

function createAnimalPanel() {
  selector.y = 75;
  noStroke();
  fill(colors.panel.background);
  rect(1490, 40, 395, 1200, 35);

  animals.forEach(animal => {
    window[`draw${animal}Selector`](selector.x, selector.y);
    console.log(selector.x, selector.y);
    selector.y += selector.h + 50;
  });
}

function drawSelector(x, y, shouldFill) {
  shouldFill ? fill(colors.general.grey) : fill(colors.panel.background);
  stroke(colors.general.white);
  strokeWeight(12);
  rect(x, y, selector.w, selector.h, 35);
}

function drawPigSelector(x, y, shouldFill) {
  drawSelector(x, y, shouldFill);
  drawPig(x + 45, y + 45);
}

function drawPig(x, y) {
  noStroke();
  fill(colors.pig.body);
  // ears
  triangle(x + 10, y + 25, x + 10, y, x + 50, y + 25);
  triangle(x + 60, y + 25, x + 90, y, x + 80, y + 25);

  // body & head
  circle(x, y + 10, 90);
  ellipse(x + 55, y + 53, 150, 85);

  // legs
  ellipse(x + 53, y + 95, 25,60);
  ellipse(x + 84, y + 105, 25, 55);
  ellipse(x + 155, y + 105, 25, 55);
  ellipse(x + 186, y + 95, 25, 60);

  // nose & eyes
  fill(colors.pig.nose);
  ellipse(x + 25, y + 62, 40, 25);
  fill(colors.general.black);
  circle(x + 25, y + 43, 15);
  circle(x + 50, y + 43, 15);

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

function drawChickSelector(x, y, shouldFill) {
  drawSelector(x, y, shouldFill);
  drawChick(x + 80, y + 50);
}

function drawChick(x, y) {
  noStroke();
  fill(colors.chick.body);

  // tail
  triangle(x, y + 56, x + 46, y + 80, x + 43, y + 107);

  // body
  circle(x + 34, y + 41, 78);

  // head
  circle(x + 75, y, 58);

  // nose & eyes
  fill(colors.general.black);
  circle(x + 99, y + 19, 9);
  circle(x + 112, y + 19, 9);
  fill(colors.chick.beak);
  triangle(x + 121, y + 26, x + 150, y + 39, x + 115, y + 45);

  // legs & feet
  stroke(colors.chick.legs);
  strokeWeight(8);
  line(x + 59, y + 108, x + 49, y + 141);
  line(x + 85, y + 110, x + 95, y + 143);
  line(x + 49, y + 141, x + 59, y + 143);
  line(x + 95, y + 143, x + 105, y + 136);
}

function drawHorseSelector(x, y, shouldFill) {
  drawSelector(x, y, shouldFill);
  drawPig(x + 45, y + 45);
}
function drawHorse(x, y) {


 }

function drawSheepSelector(x, y, shouldFill) {
  drawSelector(x, y, shouldFill);
  drawSheep(x + 38, y + 45);
}
function drawSheep(x, y) {
  // legs
  stroke(colors.sheep.legs);
  strokeWeight(15);
  line(x + 63, y + 86, x + 42, y + 126);
  line(x + 81, y + 93, x + 100, y + 142);
  line(x + 182, y + 97, x + 160, y + 144);
  line(x + 196, y + 97, x + 214, y + 144);

  // body
  noStroke();
  fill(colors.sheep.body);
  circle(x + 33, y + 26, 59);
  circle(x + 72, y + 12, 59);
  circle(x + 120, y + 12, 59);
  circle(x + 166, y + 26, 59);
  circle(x + 150, y + 56, 59);
  circle(x + 107, y + 56, 59);
  circle(x + 61, y + 56, 59);

  // head
  fill(colors.sheep.head);
  circle(x + 14, y, 72);
  fill(colors.sheep.ears);
  ellipse(x, y + 11, 20, 60);
  ellipse(x + 75, y + 11, 20, 60);
  circle(x + 27, y + 24, 15);
  circle(x + 56, y + 24, 15);
}