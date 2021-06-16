class Pigs extends Plane{
  
constructor(x,y,width,height){
   super(x,y,width,height);
    this.image = loadImage("sprites/enemy.png");
  }  
   display(){
console.log(this.body.speed);
super.display();

   }
}