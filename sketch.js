
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




	ground1 = new ground(100, 150, 1500, 50 );
	
	ball1=new PaperBall(200,600,20);
	
	console.log(ground)


	var options = {

        bodyA: ball1,
        pointB: ground,
        stiffness: 0.04,
        length: 10
     
}


var Chain = Constraint.create(options);
World.add(world,Chain);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 drawSprites();
 ellipseMode(RADIUS);

 ball1.display();
ground1.display();

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	 
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:-200});
	 }
   }

