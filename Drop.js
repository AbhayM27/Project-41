class Drops {
    constructor(x,y) {

        this.body = Bodies.circle(x,y,this.radius);
        this.radius = radius;

        World.add(world,this.body);
    }

 update() {






 }

 display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();



 }




















}