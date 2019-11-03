function Wall(x,y,w){
	this.x = x;
	this.y = y;
	this.w = w;

	this.show = function(){
		ellipse(this.x,this.y,this.w,this.w);
	}
}

function constructMaze(){
	
}