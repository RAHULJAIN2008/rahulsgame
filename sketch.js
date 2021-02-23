var mario,ground,gun,bullet,backgroundimg,marioimg,gunimg,bulletimg;
var invisibleground;
var score = 0;
var bulletGroup;
var gameover,gameoverimg;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
marioimg = loadAnimation("mario.gif");
gunimg = loadAnimation("gun.gif");
bulletimg = loadImage("bullet.png");
backgroundimg = loadImage("background.jpg");
gameoverimg = loadAnimation("gameover.gif");

}



function setup() {
  createCanvas(1000,600);
ground = createSprite(400,150,1500,900);
ground.addImage("background",backgroundimg);
mario = createSprite(70, 200, 50, 50);
mario.addAnimation("mario",marioimg);
invisibleground = createSprite(80,350,50,50);
invisibleground.visible=false;
gun = createSprite(700,250,50,50);
gun.addAnimation("gun",gunimg);
gun.scale = 0.5;
bulletGroup =  new Group();
gameover = createSprite(400,150,70,70);
gameover.addAnimation("gameover",gameoverimg);
gameover.scale=0.5;
gameover.visible=false;
}


function draw() {
  background(255,255,255); 
  textSize(75);                                                                                                                                                      
  score = text("Score:"+score,600,50);
if(gameState==PLAY){
  if(keyDown("space")&& mario.y >= 180) {
    mario.velocityY = -5;
  }
    if(bulletGroup.isTouching(mario)){
      gameover.visible=true;
      gameState=END;   
    
  }

//add gravity
mario.velocityY = mario.velocityY + 0.8;
bulletload(); 
}
 
mario.collide(invisibleground);
drawSprites();

}
function bulletload(){
if(frameCount%20==0){
  gun.y = Math.round(random(100,250));
var bullet = createSprite(650,gun.y-10,10,10);
bullet.addImage("bullet",bulletimg);
bullet.velocityX = -20;
bulletGroup.add(bullet);

}


}