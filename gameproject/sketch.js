var obstaclegroup, obstacle1, obstacle2, obstacle3,obstacle4;
var backgroundimage;
var mainbiker;
var gameover;
var waterbottle;
var carcrash;
var gameState = PLAY;
var PLAY = 1;
var END = 0;


function preload(){
    obstacle1 = loadImage("assets/obstacle1.png");
    obstacle2 = loadImage("assets/obstacle2.png");
    obstacle3 = loadImage("assets/obstacle3.png")
    obstacle4 = loadImage("assets/obstacle4.png")
    backgroundimage = loadImage("assets/background.jpg");
    mainbiker = loadImage("assets/mainbiker.png");
    gameover = loadImage("assets/gameover.png");
    waterbottle = loadImage("assets/waterbottle.png");
    carcrash = loadAnimation("crash.png","crash2.png","crash3.png");
    

}
function setup(){
    canvas = createCanvas(2200,1000);

    mainbiker = createSprite(550,150,300,300);
    mainbiker.scale =  0.7;
    mainbiker.setCollider("rectangle",0,0,40,mainbiker.height);

    invisibleGround = createSprite(200,190,400,10)
    invisibleGround.visible = false;

    obstaclesgroup = createGroup();

  

    score = 0


}

function draw(){
    background(backgroundimage);

    text("Score: "+ score, 50,50);

    console.log ("this is", gameState);
    mainbiker.debug = true


    if(gameState === PLAY){
        ground.velocityX = .5;
        score = score + Math.round(frameCount/70);

        

        if(keydown("space")&& mainbiker.y >=100){
            mainbiker.velocityY = -2
        }
        mainbiker.velocityY = mainbiker.velocityY  + 0.7

        spawnObstacles();

        if(obstaclesgroup.isTouching(mainbiker)){
            gameState =END;

        }
    }
    else if (gameState === END){
        ground.velocityX = 0;
        obstaclesGroup.setVelocityXEach(0);
        mainbiker.changeAnimation("crash",carcrash);
        mainbiker.velocityY = 0;
        


    }
  mainbiker.collide(invisibleGround);



    drawSprites();

}


function spawnObstacles(){
if (frameCount % 60 === 0)
    var obstacle = createSprite(450,145,40,25);
    obstacle.velocityX = -6

    var rand = Math.round(random(1,4));
    switch(rand){

    case 1: obstacle.addImage(obstacle1)
        break;
    case 2: obstacle.addImage(obstacle2)
        break;
    case 3: obstacle.addImage(obstacle3)        
        break;
    case 4: obstacle.addImage(obstacle4)        
        break;
    default: break;    
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 250;
}
