class Pigs extends Plane{
  
constructor(x,y,width,height){
   super(x,y,width,height);
   this.width = width;
   this.height = height;
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
  score(){
  if(this.width > 30){
    if(this.Visibility < 0 && this.Visibility >-155){
      score++;    
    }
    
  }
 else{
  if(this.Visibility < 0 && this.Visibility >-105){
    score++;    
  }

 }
 
  }  
   display(){
//console.log(this.body.speed);
if(this.body.speed < 3){
  super.display();
}
else{
  push();
  this.Visibility = this.Visibility -5;
  console.log(this.Visibility);
  tint(255, this.Visibility);
  image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
World.remove(world, this.body);
pop();
}
   }
}