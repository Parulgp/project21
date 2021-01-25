var gameobject1,gameobject2,gameobject3,gameobject4,gameobject5;

function setup() {
  createCanvas(1200,800);

  gameobject1=createSprite(400,500,30,30);
  gameobject2=createSprite(200,500,80,30);
  gameobject3=createSprite(300,500,80,30);
  gameobject4=createSprite(400,500,80,30);
  gameobject5=createSprite(500,500,80,30);

  gameobject1.shapeColor="white";
  gameobject2.shapeColor="blue";
  gameobject3.shapeColor="orange";
  gameobject4.shapeColor="pink";
  gameobject5.shapeColor="purple";

  gameobject1.debug=true;
  gameobject2.debug=true;
  gameobject3.debug=true;
  gameobject4.debug=true;
  gameobject5.debug=true;
}

function draw() {
  background(0,0,0); 
  gameobject1.velocityY=4; 
  //gameobject1.x=World.mouseX;
  //gameobject1.y=World.mouseY;

 if(isTouching(gameobject1,gameobject4))
 {
  gameobject1.shapeColor="red";
  gameobject4.shapeColor="red";
  }
  else{
    gameobject1.shapeColor="green";
    gameobject4.shapeColor="green";
  }
  createEdgeSprites();
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <= object1.width/2+object2.width/2 
    && object2.x- object1.x <=  object1.width/2+object2.width/2 
    && object1.y-object2.y <= object1.height/2+object2.height/2
    && object2.y- object1.y <=  object1.height/2+object2.height/2 ){
      return true;
    }
    else{
      return false;
    }
}