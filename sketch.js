const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var options= {
  restitution:1.0,
  desity:0.1
}
object = Bodies.rectangle(200,200,50,60,options);
World.add(world,object);
var ground_options={
  isStatic:true
}
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,60);
  rect(ground.position.x,ground.position.y,400,20);
}