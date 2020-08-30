class Box{
  constructor(x, y) {
      var options = {

          restitution: 0.9,
          friction: 0.1,
          density: 0.1,
          isStatic: false

      }
      this.body = Bodies.rectangle(x, y, 20, 35, options);
      this.width = 20;
      this.height = 35;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<6){

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
      this.visibilty = this.visibilty-1;
      tint(255,this.visibilty);
      pop();

      }

      

    }
}