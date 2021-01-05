
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var dut;
var bg;
var num =205;
var k = 0;
var rock;

function preload(){
  dut = loadImage("dustbin.png");
  bg = loadImage("back.jpg");
  rock = loadSound("boom-pack.mp3");
}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;

  rock.play();

	//Create the Bodies Here.
 

  paper1=new paper(150,320,25);
  dustbin1=new dustbin(830+num,325,15,120);
  dustbin2=new dustbin(920+num,325,15,120);
  ground1=new ground(600,392.5,1200,15);
	
  
}


function draw() {
  
  background(bg);

  Engine.update(engine);
  

  if(keyCode === DOWN_ARROW && k === 1){
    paper1=new paper(150,320,25);
    k = 0;
  }

  paper1.display();
  

  image(dut,800+num,250,150,150);

}
function keyPressed()
{
  if(keyCode === UP_ARROW && k === 0)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:148,y:-115});
    k = 1;
  }
}


