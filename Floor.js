class Floor{
  constructor(x,y,width,height){
    
     var object_options = {
    isStatic : true
  } 
     this.body= Bodies.rectangle(x,y,width,height, object_options);
    this.width = width;
    this.height = height;
  World.add(world, this.body);
  }
  
  
  
  
  display(){
    var pose = this.body.position;
    
    
    rectMode(CENTER);
  fill(250,45,23);
  rect(pose.x,pose.y,this.width,this.height);
    
  }
}