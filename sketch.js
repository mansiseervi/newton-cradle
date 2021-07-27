const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob2,bob3,bob4,bob5;
var chain,chain2,chain3,chain4,chain5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
 
    bob = new Bob(350,400,50); 
	bob2 = new Bob(400,400,50); 
	bob3= new Bob(450,400,50); 
	bob4 = new Bob(500,400,50); 
	bob5 = new Bob(550,400,50); 
    
	chain = new Chain(bob.body,{x:350,y:100})
	chain2 = new Chain(bob2.body,{x:400,y:100})
	chain3 = new Chain(bob3.body,{x:450,y:100})
	chain4 = new Chain(bob4.body,{x:500,y:100})
	chain5 = new Chain(bob5.body,{x:550,y:100})
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x:-30,y:155});
}

}