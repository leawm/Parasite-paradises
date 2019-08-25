
var myFont;

function preload() {
    myFont = loadFont('typo/basis_grotesque_regular.otf');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

  cursor(HAND);

     textFont(myFont);
     textAlign(CENTER, CENTER);
     fill(random(250));
     textSize(26);
     text("Virtual Gallery", 40,40);
     text("Random", width-80,40);
     text("Studio", width-70,70);
     text("www", 75,height-40);
     text("instagram", width-60,height-40);

}
