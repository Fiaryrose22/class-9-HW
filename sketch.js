
function setup() {
  createCanvas(400,400);
  background(30);
  var box=createSprite(200,200,30,30);
}

function draw() 
{
  
  if(keyDowm(DOWM_ARROW))
  {
    background("red")  
  }
  
  if(keyDowm(UP_ARROW))
  {
    background("blue")
  }
  
  if(keyDowm(RIGHT_ARROW))
  {
    background("green")
  }
 if(keyDowm(LIFT_ARROW))
  {
    background("black")
  }
  drawSprites()
}
