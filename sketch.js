var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,100,40,40);
  movingRect.shapeColor="blue";
  fixedRect = createSprite(300,300,40,40);
  fixedRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else{
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }

  drawSprites();
}