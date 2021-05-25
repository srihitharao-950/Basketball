var starImg, fairyImg, bgImg;
var star, starBody;
var bb2,bb2Img
var bb , bbImg
var bg , bgImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/bb.png");
	bb2Img = loadImage("images/bb-2.png");
	bbImg = loadImage("images/bb.png");
	fairyImg = loadImage("images/bb-1.png");
	bgImg = loadImage("images/bg.PNG");

}

function setup() {
	createCanvas(800, 580);

	bg = createSprite(350, 200);
	bg.addImage(bgImg);  
	bg.scale=2.5


	fairy = createSprite(130, 400);
	fairy.addImage(fairyImg);  

	star = createSprite(650,30);
	star.addImage(starImg);

	bb2 = createSprite(130, 400);
	bb2.addImage(bb2Img); 
	bb2.visible=false; 

	bb = createSprite(185,330);
	bb.addImage(bbImg);


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(500 , -5000 , 5 , {restitution:1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background("black");

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  fairy.velocityX = 0
  

  drawSprites();

}

function keyPressed() {



	if(keyCode === RIGHT_ARROW){
           fairy.velocityX = 50
		   
	}
	
        if(keyCode === LEFT_ARROW){
			fairy.velocityX = -50
			
	}

	if (keyCode === DOWN_ARROW) {
		bb.velocityX=3.5
		bb.velocityY=-5
		bb2.visible=true
		fairy.visible=false;
		Matter.Body.setStatic(starBody,false); 
	}
}