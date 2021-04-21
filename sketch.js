
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	box = new box(600, 100 ,10, 40);
	box2 = new box(600, 90 ,40, 10);
	box3 = new box(640, 100 ,10, 40);
	paper = new paper(200, 90, 10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box.display();
  box1.display();
  box2.display();

  paper.display();

  drawSprites();
 
}


