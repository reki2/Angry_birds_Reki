class Pigs extends Plane{
  
constructor(x,y,width,height){
   super(x,y,width,height);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }  
   display(){
console.log(this.body.speed);
if(this.body.speed < 3){
  super.display();
}
else{
  push();
  this.Visibility = this.Visibility -5;
  tint(255, this.Visibility);
  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
world.remove(world, this.body)
pop();
}
   }
}