class Launcher
{
    constructor(bodyA,pointB)
    {

        var options = 
        {
            bodyA:bodyA,
            pointB:pointB,

            'length' : 10,
'stiffness' : 0.01
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options)
        World.add(this.sling)
    }


fly ()
{
    this.sling.bodyA = null

}

 display()
{
    if(this.sling.bodyA)
    {
        var a = this.sling.pointB.position;
        var b = this.pointB;

        line(a.x,a.y,b.x,b.y)
    }
}
}