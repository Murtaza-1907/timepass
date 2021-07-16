class Rubber{
	constructor(x,y,r)
	{
		var options = 
		{
			restitution:0.3,
			density:5,
			friction:1
			
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var angle = this.body.angle		
			push()
			translate(this.body.position.x,this.body.position.y);
			rotate(angle)
			// rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			// ellipseMode(RADIUS)
			ellipse(0,0,this.r)
			pop()
	}

}