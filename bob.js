class Bob{

    constructor(x,y,radius){
var options = {
        'restitution':1.4,
        'friction':1.0,
        'density':1.0,
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.Bodies.radius(this.x,this.y(this.radius-20)/2,options)
    World.add(world,this.body);
}
display(){
    var bobpos = this.body.position;
    push()
    translate(bobpos.x,bobpos.y);
    rectMode(CENTER)
    fill(rgb(6,253,199));
    ellipse(0,0,this.radius,this.radius);
    pop()
}

}