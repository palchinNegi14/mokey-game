var backImage,backgr;
var player, player_running;
var back, backImage
var invisibleGround


var bananas, bananasImage

var obstacles
var FoodGroup, bananaImage;
var obstaclesGroup, obstacleImage

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananasImage = loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}

function setup() {
  createCanvas(600,400);
  
 back=createSprite(300,200,20,20);
  back.addImage("background", backImage)
   back.scale=1.2
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  invisibleGround=createSprite(300,400,600,20);
 invisibleGround.visible=false;
 
  foodGroup=new Group();
  obstaclesGroup=new Group();
}

function draw(){
  
  background(180);
  

 
    if(keyDown("space")&&player.y>335){
    
    player.velocityY=-18;
  }
  
  player.velocityY=player.velocityY+0.8;
  
  
  
  back.velocityX=-4;
  if(back.x<0){
    back.x=300;
  }
    spawnBananas();
    spawnObstacles();
  
  if(foodGroup.isTouching(player)){ 
     foodGroup.destroyEach();
     score=score+2;
} 
  
  switch(score){
    case 10: player.scale=0.12;
            break;
    case 20: player.scale=0.14;
            break;
  case 30: player.scale=0.16; 
            break;
    case 40:player.scale=0.18;
            break;
  default: break;
      
  }
  
  if(obstaclesGroup.isTouching(player)){
    player.scale=0.1;
    
  }
  
  player.collide(invisibleGround);
  
   drawSprites();
  
  textSize(20);
  fill("black");
  text("score:"+score,280,50);
  
}

function spawnBananas(){
if(frameCount%100===0){ 
  bananas=createSprite(600,30,20,20);
  bananas.addImage("bananas",bananasImage);
  bananas.velocityX=-4;
  bananas.y=Math.round(random(200,300));
  bananas.scale=0.06
  bananas.lifetime=150;
  foodGroup.add(bananas);
}
}

function spawnObstacles(){
  if(frameCount%80===0){
    obstacles=createSprite(600,390,20,20);
    obstacles.addImage("stone",obstacleImage);
    obstacles.velocityX=-4;
    obstacles.lifetime=150;
    obstacles.scale=0.2
   obstaclesGroup.add(obstacles);
  }
}