var fixedRect, movingRect, gameObject1, gameObject2, rect1, rect2;

 function setup(){
   createCanvas(1200,600);

    fixedRect = createSprite(400, 200, 50, 80); 
    fixedRect.shapeColor = "green"; 
    //fixedRect.debug = true;

    movingRect = createSprite(500, 200, 80, 30);
    movingRect.shapeColor = "green"; 
    //movingRect.debug = true; 

    gameObject1 = createSprite(300, 50, 40, 40);
    gameObject1.shapeColor = "blue";

    gameObject2 = createSprite (250,50,30,50);
    gameObject2.shapeColor = "pink";

    rect1 = createSprite(800, 50, 40, 40);
    rect1.shapeColor = "yellow";
    rect1.velocityY = 5;
    
    rect2 = createSprite (800,500,30,50);
    rect2.shapeColor = "silver";
    rect2.velocityY = -5;
    }


  function draw() {
  background(0,0,0);
  movingRect.x = mouseX; 
  movingRect.y = mouseY; 
 
  if (isTouching(movingRect, gameObject2))
  {
    gameObject2.shapeColor = "yellow";
    movingRect.shapeColor = "yellow"; 
    //text ("welldone",400,300);
  }
  else
  {
    gameObject2.shapeColor = "green"; 
    movingRect.shapeColor = "green"; 
  }

  bounceOff(rect1 , movingRect);
  
  drawSprites(); 
}


