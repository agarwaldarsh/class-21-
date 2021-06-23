var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
var ball_options={
	isStaic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.
ball.Bodies.circle(200,200,20,ball_options)
World.add(world,ball)

groundObj=new ground(width/2,670,width,20);
leftSide= new ground(1100,600,20,200);
rightSide=new ground(1200,600,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Body.ellipse(position.x,position.y,20)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}



