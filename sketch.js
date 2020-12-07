var pc,npc,deadman,backGround,edges;
var back,player,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8;
var obs4,obs4_1,obs4_2,obs4_3,edge1,edge2,edge3,edge4;

function preload(){
  pc = loadImage("../images/gun man 2.png");
  npc = loadImage("../images/gun man 1.png");
  deadManimg = loadImage("../images/NPC.png");
  backGround = loadImage("../images/background.png");
  obs1 = loadImage("../images/obstacle 1.png");
  obs2 = loadImage("../images/obstacle 2.png");
  obs3 = loadImage("../images/obstacle 3.png");
  obs4 = loadImage("../images/obstacle 4.png");
  obs4_1 = loadImage("../images/obstacle 4 1.png");
  obs4_2 = loadImage("../images/obstacle 4 2.png");
  obs4_3 = loadImage("../images/obstacle 4 3.png");
  
}

function setup() {
  createCanvas(1730,1200);
 back =  createSprite(865,600,20,20);
 back.addImage(backGround);
 back.scale = 0.5;
 player = createSprite(100,600,20,20);
 player.addImage(pc)
 player.scale = 0.4;

 Nplayer = createSprite(700,700,20,20);
 Nplayer.addImage(npc)
 Nplayer.scale = 0.4;

 edge1 =  createSprite(850,-252,2500,20);
 edge1.visible = false;
 edge2 =  createSprite(850,1452,2500,20);
 edge2.visible = false;
 edge3 =  createSprite(-374,600,20,1700);
 edge3.visible = false;
 edge4 =  createSprite(2090,600,20,1700);
 edge4.visible = false;

 obstacle1 = createSprite(300,300,20,20);
 obstacle1.addImage(obs1);
 obstacle2 =  createSprite(-204,-84,20,20);
 obstacle2.addImage(obs4_1);
 obstacle3 =  createSprite(1930,1320,20,20);
 obstacle3.addImage(obs4_3);
 obstacle4 =  createSprite(-204,1320 ,20,20);
 obstacle4.addImage(obs4);
 obstacle5 =  createSprite(1966,-84,20,20);
 obstacle5.addImage(obs4_2);
 obstacle6 =  createSprite(865,600,20,20);
 obstacle6.addImage(obs3);

 player.debug = true;
 
 
}

function draw() {
  background(40,104,28)  
  player.setCollider("rectangle",0,0,240,170)
  camera.position.x = player.x;
  camera.position.y =player.y;
  console.log(player.x)
  console.log(player.y)
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -6
  }
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 6
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0
  }
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -6
  }
  if(keyWentDown(DOWN_ARROW)){
    player.velocityY = 6
  }
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0
  }

  player.collide(edge1);
  player.collide(edge2)
  player.collide(edge3)
  player.collide(edge4)
  
  

  drawSprites();
}