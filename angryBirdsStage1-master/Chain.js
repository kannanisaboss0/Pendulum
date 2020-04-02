class Chain{
    constructor(BodyA,BodyB){
        var options={
            BodyA:BodyA,
            BodyB:BodyB,
            stiffnes:0.04,
            length:5
        }
        this.Chain=constraint.create(options);
        World.add(world,this.Chain);

    }
    display(){
        var pointA=this.Chain.BodyA.position;
        var pointB=this.Chain.BodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}