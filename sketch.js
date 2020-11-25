
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var box,polygonIMG;
var slingShot;
function preload(){
  polygonIMG=loadImage("polygon.jpeg")
}

function setup() {
  var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
var options={
  density:1.2,
  friction:0.2,
  restitution:0.3
}
 polygon=Bodies.circle(100,200,30,options)
 World.add(world,polygon)

  slingShot = new SlingShot(polygon,{x:100,y:200})
  ground = new Ground(600,height,1200,20);
//level1
  b1=new Block(300,250,30,40)
  b2=new Block(330,250,30,40)
  b3=new Block(360,250,30,40)
  b4=new Block(390,250,30,40)
  b5=new Block(420,250,30,40)
  b6=new Block(450,250,30,40)
  b7=new Block(480,250,30,40)
  base1=new Ground(380,265,240,10)
//level2
b8=new Block(330,235,30,40)
b9=new Block(360,235,30,40)
b10=new Block(390,235,30,40)
b11=new Block(420,235,30,40)
b12=new Block(450,235,30,40)
//level3
b13=new Block(360,195,30,40)
b14=new Block(390,195,30,40)
b15=new Block(420,195,30,40)
//top
b16=new Block(390,155,30,40)
base2=new Ground(915,225,200,10)
//level2nd
b17=new Block(850,210,30,40)
b18=new Block(880,210,30,40)
b19=new Block(910,210,30,40)
b20=new Block(940,210,30,40)
b21=new Block(970,210,30,40)
b22=new Block(1000,210,30,40)
//level2nd2
b23=new Block(880,170,30,40)
b24=new Block(910,170,30,40)
b25=new Block(940,170,30,40)
b26=new Block(970,170,30,40)

//level2nd1
b27=new Block(910,140,30,40)
b28=new Block(940,140,30,40)
}

function draw() {
background(0); 
Engine.update(engine)
ground.display()
imageMode(CENTER)
image(polygonIMG,polygon.position.x,polygon.position.y,30,30)
slingShot.display()
base1.display()
base2.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b17.display()
b18.display()
b19.display()
b20.display()
b21.display()
b22.display()
b23.display()
b24.display()
b25.display()
b26.display()
b27.display()
b28.display()



drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keypressed(){
  if(keyCode===32){
    slingShot.attach(polygonIMG.body)
  }

}