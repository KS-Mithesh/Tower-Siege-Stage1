class block{
    constructor(x,y,color){
        this.body = Bodies.rectangle(x,y,50+2,60+2,{restitution:0.3,friction:0.3,density:0.3});
        World.add(world,this.body);
        this.color = color;
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);stroke("black");strokeWeight(2.5);fill(this.color);
        rect(pos.x,pos.y,50,60);
    }
}