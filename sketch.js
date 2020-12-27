var bullet, wall;
var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;



var speed ,weight,thickness;

function setup() {
  
  createCanvas(1600,1000);

  

  bullet = createSprite(50, 200,60, 20);

  wall = createSprite(1500,190,thickness,height/4);

  bullet1 = createSprite(50, 400, 60, 20);
  wall1 = createSprite(1500,390,thickness,height/4);

  bullet2 = createSprite(50, 600, 60, 20);
  wall2 = createSprite(1500,590,thickness,height/4);

  bullet3 = createSprite(50, 800, 60, 20);
  wall3 = createSprite(1500,790,thickness,height/4);




  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);



  bullet.velocityX=speed;
  bullet1.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;




}

function draw() {
  background(0);
 //bullet.sprite.collide(wall.sprite,calculateDeformation)
 if(hasCollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=0.5 * weight *speed* speed/(thickness *thickness *thickness)
  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);

  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);

  }


 }

drawSprites();

}

function hasCollided( lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall

if (bulletRightEdge>=wallLeftEdge)
   {
      return true
   }
   return false

}
