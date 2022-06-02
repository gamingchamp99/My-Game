var bg,bgImg;


function preLoad(){
  bgImg= loadImage("assets/Zombie2.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg);
bg.scale=0.1;
}

function draw(){
  background(0);

  drawSprites();
}