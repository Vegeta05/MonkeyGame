var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
}


function draw() {
  background("lightblue"); 
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityx = -4;

  if(ground.x>0){
    ground.x = ground.width/2;
  }
  
  console.log(ground.x);
  
  monkey.velocityY = monkey.velocityY = 8;
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);  
  
  
  drawSprites();
}






