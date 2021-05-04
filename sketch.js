const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, ball;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   // ball = new Rubber(50, 60, 30)
    ball = new Rubber(50,60,30)
    stone = new Stone(70,60) 
    iron = new Iron(80, 60);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ball.display();
    stone.display();
    iron.display();

    plane.display();
    hammer.display();
   // ball.display();
    
 
}