class Umbrella{
    constructor(x,y,radius){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/walking_1.png");
        World.add(world, this.body);
    }
    diplay(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}