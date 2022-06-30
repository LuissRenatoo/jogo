var bola,bolaImg;
var quadrado1;
function preload(){
bolaImg=loadImage("bola.png");
}
function setup() {
  createCanvas(400,400);
quadrado1=createSprite(200,200,50,50);
 bola=createSprite(100,300,20,20);
 bola.addImage(bolaImg);
 bola.scale=0.01
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    quadrado1.x=quadrado1.x+10
    }
  if(keyDown("left")){
  quadrado1.x=quadrado1.x-10
  }
 drawSprites();
}




