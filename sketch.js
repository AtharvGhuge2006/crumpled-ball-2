
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballsprite,dustbinsprite;
var ball,ground,wall1,wall2,wall3,ballimg,dustbinimg;
function preload()
{
dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(800,790,1600,20)
    ball=new Ball(250,250,50)
    Base=new Dustbin(1322,766,310,20)
    left_wall=new Dustbin(1179,606,20,340)
    right_wall=new Dustbin(1465,606,20,340)
    dustbinsprite=createSprite(1322,606)
    dustbinsprite.addImage(dustbinimg)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(144, 3, 252);
  Engine.update(engine)
  ground.display()
  ball.display()
  Base.display()
  left_wall.display()
  right_wall.display()
  drawSprites();
  
}
 function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:165,y:-250})
      
    }

}


