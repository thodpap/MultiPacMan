function PackMan(x,y,r,color){
	this.score = 0;
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;
	this.dx = 0;
	this.dy = 0;

	this.move = function(dx,dy){
		this.dx = dx;
		this.dy = dy;
		this.x += this.dx * velocity;
		this.y += this.dy * velocity;
		if(this.x === this.r/2 || this.x === width - this.r/2) this.dx = 0;
		if(this.y === this.r/2 || this.y === height - this.r/2) this.dy = 0;

		for(let i = 0; i < wall.length; i++){
			let d = dist(this.x,this.y,wall[i].x - wall[i].w/2,wall[i].y);
			if(d < this.r){
				if(this.dx !== 0){
					this.dx = 0;
				}
				if(this.dy !== 0){
					this.dy = 0;
				}
			}
		}
	}
	this.show = function(){
		this.move(this.dx,this.dy);
		noStroke();
		fill(this.color);
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