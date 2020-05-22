let colors, w, h, clouds;

function setup() {
  // put setup code here
  colors = {
    sky: color('#56E8F4'),
    clouds: color('#FFFFFF'),
    sun: color('#FFDE00'),
    grass: color('#1D6E41'),
    trunk: color('#81361C'),
    leaves: color('#20A159'),
  };
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  noStroke();
  noLoop();
}

function draw() {
  createSky();
  createGrass();
  createTree();
}

function createSky() {
  background(colors.sky);
  fill(color(colors.sun));
  ellipse(100, 100, 325, 325);
  let numClouds =  Math.floor((Math.random() * 20) + 4);
  clouds = new Array(numClouds);
  for (let i = 0; i < numClouds; i++) {
    createCloud(i);
  }
}

function createGrass() {
  fill(color(colors.grass));
  rect(0, h - 360, w, 360);
}

function createTree() {
  const trunkW = 144;
  const trunkH = 400;
  let leavesCenter = w / 2;

  // add tree trunk
  fill(color(colors.trunk));
  rect((w - trunkW)/2, h - trunkH - 250, trunkW, trunkH);

  // add leaves
  fill(color(colors.leaves));
  ellipse(leavesCenter, h - trunkH - 250, 300, 300);
  ellipse(leavesCenter - 200, h - trunkH - 250, 300, 300);
  ellipse(leavesCenter + 200, h - trunkH - 250, 300, 300);
}

// set up vars for clouds
// save each ellipse of cloud to index for later use
function createCloud(index) {
  let x =  Math.floor((Math.random() * w));
  let y = Math.floor((Math.random() * (h-405)));
  clouds[index] = { x, y };
  fill(color(colors.clouds));
  clouds[index].left = ellipse(x, y, 90, 90);
  x+=60;
  clouds[index].center = ellipse(x, y-20, 130, 130);
  x+=60;
  clouds[index].right = ellipse(x, y, 90, 90);
}