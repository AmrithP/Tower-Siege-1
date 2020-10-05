class Box{
  constructor(x, y) {
      var options = {

        'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 35, options);
      this.width = 20;
      this.height = 35;
      this.Visibility = 255;
      World.add(world, this.body);
    }

    

    display(){

      if(this.body.speed<3){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();

      } else{

      World.remove(world,this.body);
      push();
      this.Visibilty = this.Visibilty-5;
      tint(255,this.Visibilty);
      pop();

      }

      

    }


    score(){

      if(this.Visibilty = this.Visibilty-5){
  
        score++;
  
      }
  
   } 

    

};