
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ground1,ground2,ground3;
var particle =[];
var plinko =[];
var divisions =[];
var divisionsHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;

	for(var k=0; k<=width; k=k +80){
		divisions.push(new Division(k, height- divisionsHeight/2, 19, 250));
	
	} 

	for(var j=40; j <=width; j=j+50){
		plinko.push(new Plinko(j,75,10));
	}
	
	for(var p=0; p<=width-20; p=p+ 40){
		particle.push(new Particle(p,100,10));
	}

	for(var j=15; j<=width -10; j=j+50){
		plinko.push(new Plinko (j,175,10));
	}
	
	for(var j=40; j<=width; j=j+50){
		plinko.push(new Plinko (j,275,10));
	}

	for(var j=15; j<=width; j=j+50){
		plinko.push(new Plinko (j,375,10));
	}

	

	//Create the Bodies Here.
	
	ground1 =new Ground(240,775,500,10);
	ground2 =new Ground(3,390,7,780);
	ground3 =new Ground(477,390,7,780);
	ground =new Ground(240,766,500,10);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(frameCount%60=== 0){
   particle.push(new Particle(random(width/2-10, width/2+10),10,10));

  }
 

  for(var k=0; k< divisions.length; k++){
    divisions[k].display();

} 

for(var j=0; j< plinko.length; j++){
    plinko[j].display();

} 

for(var p=0; p< particle.length; p++){
	particle[p].display();
}



  fill (255);
  ground.display();
  
  fill (122,49,7);
  ground1.display();
  ground2.display();
  ground3.display();

  
}


