class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,50,options);
      this.width = 60;
      this.height = 60;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      // aplica nueva configuracion 
      push();
      //eje 0 del objeto a posision en x  y
      translate(this.body.position.x,this.body.position.y);
      //cambiar el angulo del objeto
      imageMode(ellipse);
      /*strokeWeight(4);
      stroke("green");
      fill(255);*/
      image(this.image,0,0, this.width, this.height);
      //anteriores configuraciones
      pop();
    }
  };