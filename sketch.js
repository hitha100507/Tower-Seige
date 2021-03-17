const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,40,40);
    box2 = new Box(920,320,40,40);
    box3 = new Box(700,240,40,40);
    box4 = new Box(920,240,40,40);
    box5 = new Box(810,160,40,40);

    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    platform.display();
//    slingshot.display();    
}
