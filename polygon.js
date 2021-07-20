class Polygon{
    constructor(x,y,angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.polygon_img=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.polygon_img, 0, 0,50,50);
        pop();
      }
}