class Pigs extends Plane{
  
constructor(x,y,width,height){
   super(x,y,width,height);
    this.image = loadImage("sprites/enemy.png");
  }  
   display(){
console.log(this.body.speed);
if(this.body.speed < 3){
  super.display();
}
else{
  push();
world.remove(world, this.body)
pop();
}
   }
}