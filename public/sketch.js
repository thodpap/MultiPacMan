let width = 600;
let height = 400;
var packman;
var velocity = 5;
let food = []; 
let wall = [];

function setup() {
	createCanvas(width,height);
	packman = new PackMan(200,200,50,'yellow');
	for(let i = 0; i < 15; i++){
		let p = new PackMan(random(width),random(height),10,'green');
		food.push(p);
	}
	constructWalls();
}

function draw() {
	background(0);
	packman.show();
	for(let i = food.length - 1; i >= 0; i--){
		if(packman.eat(food[i])){
			food.splice(i,1); 
			let p = new PackMan(random(width),random(height),10,'green');
			food.push(p);
		}else{
			food[i].show();
		}
	} 
	for(let i = 0; i < wall.length; i++){
		wall[i].show();
	}
}
function constructWalls(){
	
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		packman.move(-1,0);
	}
	else if(keyCode === RIGHT_ARROW){
		packman.move(1,0);
	}
	else if(keyCode === UP_ARROW){
		packman.move(0,-1);
	}
	else if(keyCode === DOWN_ARROW){
		packman.move(0,1);
	}
}
class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}
class PackMan{
	constructor(x,y,r,color){
		this.score = 0;
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.dx = 0;
		this.dy = 0;
	}
	move(dx,dy){
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
	show(){
		this.move(this.dx,this.dy);
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.r,this.r);
	}
	eat(food){
		let d = dist(this.x,this.y,food.x,food.y);
		if(d < this.r - food.r){
			this.score++;
			return true;
		}else{
			return false;
		}
	} 
}	 

class Wall{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
	}
	show(){
		ellipse(this.x,this.y,this.w,this.w);
	}
}