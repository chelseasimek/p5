var chords; // table of chords and names
var bgcolor; // color for empty ellipses
function preload() {
  chords = loadTable("chord_progressions.csv", "csv", "header");
}
function setup() {
  // canvas var so we can move the canvas tag into a div
  var canvas = createCanvas(750,500);
  bgcolor = color(255, 255, 255);
  var divCanvas = createDiv();
  var divButtons = createDiv();
  divCanvas.child(canvas);
  divButtons.style("background-color", "black");
  divButtons.style("float", "right");
  divCanvas.style("float", "left");
  // set a random color for each mood and chords
  chords.addColumn("color");
  for(mood of chords.rows) {
    var c = color(random(255), random(255), random(255));
    mood.set(chords.getColumnCount()-1, c.toString("#rrggbb"));
  }
  // draw the ellipses, No Mood Set
  drawEllipses("noMood");
  // draw the text labels
  drawLabels();
  //create a button for each row (mood)
  for(var mood of chords.rows) {
    drawButton(mood.getString("progression_quality"), divButtons)
  }
  drawButton('Clear', divButtons);
}

function drawButton(label, appendTo) {
  var btn = createButton(label);
  btn.class(label);
  btn.mousePressed(function(){ drawEllipses(this.class()); });
  var btnDiv = createDiv();
  btnDiv.child(btn)
  appendTo.child(btnDiv);
}

function drawLabels() {
  fill(0);
  textSize(32);
  textAlign(CENTER);
  for(var i=1; i<=7; i++) {
    text(i, i*100, 500);
  }
  textSize(18);
  textAlign(LEFT);
  text("Chord:", 10, 500);
  var labels = ["First", "Second", "Third", "Fourth"]
  for(var i=0; i<4; i++) {
    text(labels[i], 10, (i+1)*100);
  }
}
function drawEllipses(name) {
  for(var i=0; i<chords.getRowCount(); i++) {
    fill(bgcolor);
    var chord1 = chords.rows[i].getNum(0);
    var chord2 = chords.rows[i].getNum(1);
    var chord3 = chords.rows[i].getNum(2);
    var chord4 = chords.rows[i].getNum(3);
    ellipse(chord1*100, 100, 50, 50);
    ellipse(chord2*100, 200, 50, 50);
    ellipse(chord3*100, 300, 50, 50);
    ellipse(chord4*100, 400, 50, 50);
  }
  if(name != "noMood" && name !== "Clear") {
    var mood = chords.findRow(name,"progression_quality");
    fill(mood.getString("color"));
    ellipse(mood.getNum(0)*100, 100, 50, 50);
    ellipse(mood.getNum(1)*100, 200, 50, 50);
    ellipse(mood.getNum(2)*100, 300, 50, 50);
    ellipse(mood.getNum(3)*100, 400, 50, 50);
  }
}
function draw() {
}