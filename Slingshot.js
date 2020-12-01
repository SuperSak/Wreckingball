class Slingshot{
    constructor(bodyA, pointB){
        var options = {
           length:600,
           stiffness:0.15, 
           bodyA:bodyA,
           pointB:pointB
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world, this.sling);
    }
    /*fly() {
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }*/
    display(){
        var pA=this.sling.bodyA.position
        var pB=this.pointB;
        push()
        strokeWeight(10)
        line(pA.x,pA.y,pB.x,pB.y)
        pop()
    }
}