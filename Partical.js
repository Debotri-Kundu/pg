class Partical{
    constructor(x,y,radius){
        var options={
            //isStatic: false,
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
       // this.colour=rgb(random(0,255),random(0,255),random(0,255))
        this.colour=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
   }
   display(){
       
       ellipseMode(RADIUS)
       fill(this.colour)
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
       
   }
}

