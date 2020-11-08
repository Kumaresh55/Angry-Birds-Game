const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log, log1, log3, log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  var options=
  {
    isStatic:true
  }
  ground = Bodies.rectangle(600, 390, 1200, 20, options);
  World.add(world, ground);
  box1 = new boxes(1000, 370, 50, 50);
  box2 = new boxes(800, 370, 50, 50);
  box3 = new boxes(1000, 330, 50 ,50);
  box4 = new boxes(800, 330, 50, 50);
  box5 = new boxes(900, 290, 50, 50);
  pig1 = new pigs(900, 370, 50, 50);
  pig2 = new pigs(900, 330, 50, 50);
  log = new logs(900, 350, 300, PI/2);
  log1 = new logs(900, 310, 300, PI/2);
  log3 = new logs(850, 290, 120, PI/7);
  log4 = new logs(950, 290, 120, -PI/7);
  bird = new angrybirds(100, 100, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1200, 20);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log.display();
  log1.display();
  log3.display();
  log4.display();
  bird.display();
}