class Angry extends Plane{
  
constructor(x,y){
   super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.images = loadImage ("sprites/smoke.png");
    this.trajectory = []
  }  
display(){
  /*this.body.position.x = mouseX;
  this.body.position.y = mouseY;*/
  super.display();
  if(this.body.velocity.x > 8 && this.body.position.x > 195){
  var pose = [this.body.position.x, this.body.position.y]
  this.trajectory.push (pose);
  for(var i = 0; i < this.trajectory.length; i++){
    image(this.images, this.trajectory[i] [0], this.trajectory[i] [1]);
    }
} 


  fill(220);
}

}