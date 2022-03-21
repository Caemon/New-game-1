var backgroundImg

var bridge , ryuIdle, ryu

function preload(){
    backgroundImg = loadImage("assets/bridge.png");

    ryuIdle = loadImage("assets/ryuIdle.gif")
    ryuIdle = createImg("assets/ryuIdle.gif")

}

function setup(){
    createCanvas (800,600);
    console.log("Eggs");

    bridge = createSprite(400,300, 800,600);
    bridge.addImage(backgroundImg);
    bridge.scale = 1.7

  // ryu = createSprite(150,160,400,400);
   //ryu.addAnimation("idle", ryuIdle);
  
    
    ryu = createGroup();

}

function draw(){
    background("gray");

    image(ryuIdle, 150,160)

    if(keyDown("RIGHT_ARROW")){
        ryuIdle.velocityX = 10;
    }

    

    drawSprites();
}


