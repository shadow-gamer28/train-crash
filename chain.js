class chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.2,
            length: 10
        }
        this.chain = Constraint.create(options); 
        World.add(myWorld, this.chain);
    }
  
    show(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
