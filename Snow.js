class Snow{
    constructor(x, y, width, height){
        var options = {
            isStatic:false, 
            friction: 1,
            density: 1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}