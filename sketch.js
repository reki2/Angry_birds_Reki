const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backGround;
var ground, plataform;

var engine, world;

var bird;

var wooden1,wooden2,wooden3,wooden4,wooden5,wooden6,wooden7,wooden8, woden1,woden2,woden3;

var pig1, pig2, pig3, piggy1, piggy2, piggy3;

var t_r;

var gameState;

var score;

function preload() {
 backGround  = loadImage ("sprites/bg.png");
}

function setup(){
 createCanvas(1200,400);
 score = 0;
 gameState = "on_Sling"
  engine = Engine.create();
  world = engine.world;
  
  bird = new Angry(90,50);
    t_r = new R(bird.body,{x : 145,y : 110});
  ground = new Floor(600,390,1200,20);
  plataform = new Floor(90,350,300,150);
  pig1 = new Pigs(650,350,50,50);
  pig2 = new Pigs(650,290,50,50);
  pig3 = new Pigs(650,220,50,50);
  piggy1= new Pigs(650,190,25,25);
  piggy2= new Pigs(640,200,25,25);
  piggy3= new Pigs(660,200,25,25);
  wooden1 = new Box(720,350);
  wooden2 = new Box(575,350);
  wooden3 = new Box(720,250);
  wooden4 = new Box(575,250);
  wooden5 = new Box(720,230);
  wooden6 = new Box(575,230);
  wooden7 = new Box(575,190);
  wooden8 = new Box(720,190);
  woden1 = new Logs(650,300,200,PI/2);
  woden2 = new Logs(650,240,200,PI/2);
  woden3 = new Logs(650,210,200,PI/2);
  //console.log(bird)
  getTime();
}
function draw(){
 background(backGround);
  
  Engine.update(engine);
  ground.display();
  plataform.display();
  bird.display();
  wooden1.display();
  wooden2.display();
  wooden3.display();
  wooden4.display();
  wooden5.display();
  wooden6.display();
  wooden7.display();
  wooden8.display();
  woden1.display();
  woden2.display();
  woden3.display();
  pig1.display();
  pig1.score();
  pig2.display();
  pig2.score();
  pig3.display();
  pig3.score();
  piggy1.display();
  piggy1.score();
  piggy2.display();
  piggy2.score();
  piggy3.display();
  piggy3.score();


  t_r.display();
  
  textSize(25);
  fill("blue");
  text("Puntos = "+ score,1000,100);

}
function mouseDragged(){
  if(gameState != "launched")
  Matter.Body.setPosition(bird.body,{x : mouseX,y : mouseY})
}
function mouseReleased(){
  t_r.fly();
  gameState = "launched"
}

function keyPressed(){
if(keyCode === 32){
  t_r.attach (bird.body);
  gameState = "on_Sling"
}
}

function getTime(){
var date = new Date();
//console.log (date);
var hour = date.getHours();
console.log (hour);

}