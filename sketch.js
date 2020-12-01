const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var ball, chain, platform, pillar,pillarr;
function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,100*2)
    ball=new Bob(0,400,100)
    chain=new Slingshot(ball.body,{x:200, y:200})
    pillar=new Box(700,550,200,1100)
    pillarr=new Box(900,550,200,1100)
}
function draw(){
    Engine.update(engine);
    background(200)
    ground.display(200,255,55)
    ball.display()
    chain.display()
    pillar.display()
    pillarr.display()
}
function mouseDragged(){ Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})}