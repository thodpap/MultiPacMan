function PackMan(x,y,r,img){
	this.score = 0;
	this.x = x;
	this.y = y;
	this.r = r;
	this.img = img;
	this.dx = 0;
	this.dy = 0;

	this.move = function(dx,dy){
		this.dx = dx;
		this.dy = dy;
		this.x += this.dx * velocity;
		this.y += this.dy * velocity;
		if(this.x === this.r/2 || this.x === width - this.r/2) this.dx = 0;
		if(this.y === this.r/2 || this.y === height - this.r/2) this.dy = 0;

		for(let i = 0; i < Maze.length; i++){
			if(Maze[i].x == this.x)
				this.dx = 0;
			if(Maze[i].y == this.y)
				this.dy = 0;
		} 
	}
	this.show = function(){
		this.move(this.dx,this.dy);
		noStroke();
		fill('yellow');
		ellipse(this.x,this.y,this.r,this.r);
	}
	this.eat = function(food){
		let d = dist(this.x,this.y,food.x,food.y);
		if(d < this.r - food.r){
			this.score++;
			return true;
		}else{
			return false;
		}
	} 
}	 