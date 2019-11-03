function preload(){
	packman_img = loadImage("public/images/packman.png");
}
function setup() {
	createCanvas(width,height);
	packman = new PackMan(200,200,50,'yellow');
	for(let i = 0; i < 15; i++){
		let p = new PackMan(random(width),random(height),10,'green');
		food.push(p);
	}
	constructMaze();
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
	for(let i = 0; i < Maze.length; i++){
		Maze[i].show();
	}
} 