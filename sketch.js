var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10)
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	wall1=createSprite(281,610,20,100);
	wall1.shapeColor=color("red");

	wall2=createSprite(500,610,20,100);
	wall2.shapeColor=color("red");
	
	wall3=createSprite(390.2,650,200,20);
	wall3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 ,5 ,{restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	var pos=this.packageBody.position;
    var angle=this.packageBody.angle;
    translate(pos.x,pos.y);
    rotate(angle);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//create a red zone
	wall1 = Bodies.rectangle(281,610,20,100 , {isStatic:true} );
	World.add(world, wall1);
  
   	wall2 = Bodies.rectangle(500,610,20,100 , {isStatic:true} );
	World.add(world, wall2);
	   
	wall3 = Bodies.rectangle(390.2,650,200,20, {isStatic:true} );
	World.add(world, wall3);

   	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === LEFT_ARROW)
  {
	packageSprite.velocityX=-9;
	helicopterSprite.velocityX=-9;
  }
  else if(keyCode === RIGHT_ARROW)
  {
	helicopterSprite.velocityX=9;
	packageSprite.velocityX=9;
  }

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y


  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:false});
	World.add(world, packageBody);
	Matter.Body.setStatic(packageBody,false);
  }
}



