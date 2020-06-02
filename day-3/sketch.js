let w, h, colors;
const seasons = ['winter', 'spring', 'summer', 'fall'];
function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  noStroke();
  // noLoop();
  colors = {
    primary: color("#36317C"),
    secondary: color("#EDA828")
  }
}

function draw() {
  let original = width + 500;
  let updated = original;
  const multiplier = 10

  for(let i = 0; i<(original / multiplier); i++) {
    fill(lerpColor(colors.primary, colors.secondary, i/(original / multiplier)));
    ellipse(width/2, 2*(height/3), updated, updated);
    updated -= multiplier;
  }
}


const setMountains = () => {

}

const setSun = () => {

}

const setMoon = () => {

}

