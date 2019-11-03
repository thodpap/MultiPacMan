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
