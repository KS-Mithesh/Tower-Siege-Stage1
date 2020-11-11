const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var polygon1;

var chain1;

var ground1, ground2;

//blocks are created layers-vise
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;

function setup() {
  createCanvas(1200,600);

  engine   = Engine.create();
  world    = engine.world;

  polygon1 = new polygon(150,400);

  chain1   = new chain(polygon1.body,{x:150,y:400});

  //1st set's ground
  ground1  = new ground(550,500,400,15);
  //2nd set's ground
  ground2  = new ground(1000,350,300,15);

  //1st set's 1st and the starting layer
  block1   = new block(396,460,"#87CEEA");
  block2   = new block(448,460,"#87CEEA");
  block3   = new block(500,460,"#87CEEA");
  block4   = new block(552,460,"#87CEEA");
  block5   = new block(604,460,"#87CEEA");
  block6   = new block(656,460,"#87CEEA");
  block7   = new block(708,460,"#87CEEA");

  //1st set's 2st layer
  block8   = new block(448,400,"#FFC0CB");
  block9   = new block(500,400,"#FFC0CB");
  block10  = new block(552,400,"#FFC0CB");
  block11  = new block(604,400,"#FFC0CB");
  block12  = new block(656,400,"#FFC0CB");

  //1st set's 3rd layer
  block13  = new block(500,340,"#3FE0D0");
  block14  = new block(552,340,"#3FE0D0");
  block15  = new block(604,340,"#3FE0D0");

  //1st set's 4th and the final layer
  block16  = new block(552,280,"#808080");

  //2nd set's 1st and the starting layer
  block17  = new block(896,310,"#87CEEA");
  block18  = new block(948,310,"#87CEEA");
  block19  = new block(1000,310,"#87CEEA");
  block20  = new block(1052,310,"#87CEEA");
  block21  = new block(1104,310,"#87CEEA");

  //2nd set's 2nd layer
  block22  = new block(948,250,"#3FE0D0");
  block23  = new block(1000,250,"#3FE0D0");
  block24  = new block(1052,250,"#3FE0D0");

  //2nd set's 3rd layer
  block25  = new block(1000,190,"#FFC0CB");
}

function draw() {
  Engine.update(engine);
  background("#382C2C");
  
  polygon1.display();

  chain1.display();

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();
}
function mouseDragged(){
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon1.body,{x:150,y:400});
      chain1.attach(polygon1.body);
  }
}