class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true})
        World.add(world, this.body)
        this.width=width
        this.height=height
    }
    display(r,g,b){
        var pos = this.body.position
        rectMode(CENTER)
        push()
        fill(r,g,b)
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}