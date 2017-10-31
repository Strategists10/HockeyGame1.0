var x = 250, y = 250;
var x2 = 650, y2 = 250;
var score1 = 0;
var score2 = 0;
var keys1 =[false, false,false,false];
var keys2 =[false, false,false,false];
var start = false;
var menu = true;
var contr = false;
var end1 = false;
var end2 = false;

function setup() {
  // put setup code here
 	createCanvas(900, 500);
 	BPosition = createVector(450,250);
 	BVelocity = createVector(0,0);
 	field();
 	
}

function keyPressed() {
	//Player 1 ball controls
  if (keyCode === 65){  keys1[0] = true;}
  if (keyCode === 68){  keys1[1] = true;}
  if (keyCode === 87){  keys1[2] = true;}
  if (keyCode === 83){  keys1[3] = true;}
	//Player 2 ball controls
  if (keyCode === 100){  keys2[0] = true;}
  if (keyCode === 102){  keys2[1] = true;}
  if (keyCode === 104){  keys2[2] = true;}
  if (keyCode === 101){  keys2[3] = true;}
};

function keyReleased() {
	//Player 1 ball controls
  if (keyCode === 65){  keys1[0] = false;}
  if (keyCode === 68){  keys1[1] = false;}
  if (keyCode === 87){  keys1[2] = false;}
  if (keyCode === 83){  keys1[3] = false;}
  	//Player 2 ball controls
  if (keyCode === 100){  keys2[0] = false;}
  if (keyCode === 102){  keys2[1] = false;}
  if (keyCode === 104){  keys2[2] = false;}
  if (keyCode === 101){  keys2[3] = false;}
};

var Player1 = function(){
	if(x > 75){if(keys1[0] === true){x-=7;}}
	if(x < 900/2-25){if(keys1[1] === true){x+=7;}}
    if(y > 75){if(keys1[2] === true){y-=7;}}
    if(y < 500-75){if(keys1[3] === true){y+=7;}}
    noStroke();
    fill(150);
    ellipse(x, y, 50,50);
};

var Player2 = function(){
	if(x2 > 475){if(keys2[0] === true){x2-=7;}}
	if(x2 < 825){if(keys2[1] === true){x2+=7;}}
    if(y2 > 75){if(keys2[2] === true){y2-=7;}}
    if(y2 < 425){if(keys2[3] === true){y2+=7;}}
    noStroke();
    fill(150);
    ellipse(x2, y2, 50,50);
};

var field = function(){
	// the Playing board drawing
	stroke(10);
	fill(39,51,217);
	rect(0,0,width,height);
	fill(39, 143, 200);
	noStroke();
	rect(50, 50, width - 100, height - 100);
	fill(39, 143, 200);
	rect(25, 150, 25, 200);
	rect(width-50, 150, 25, 200);
	stroke(0);
	strokeWeight(5);
	line(width/2, 50, width/2, height-50);
};

var update = function(){
	playerOne = createVector(x,y);
 	//dir = createVector(0,0);
 	dir = playerOne.copy();
	dir.sub(BPosition);
	dir.normalize();
	dir.mult(-8);
	if(playerOne.dist(BPosition) < 45){
		BVelocity = dir.copy();
	}
	BPosition.add(BVelocity);
}
var update2 = function(){
	playerTwo = createVector(x2,y2);
 	//dir = createVector(0,0);
 	dir2 = playerTwo.copy();
	dir2.sub(BPosition);
	dir2.normalize();
	dir2.mult(-8);
	if(playerTwo.dist(BPosition) < 45){
		BVelocity = dir2.copy();
	}
	BPosition.add(BVelocity);
}

var display = function(){
	stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(BPosition.x, BPosition.y, 40, 40);
}

var checkEdges = function(){
	if (BPosition.x > width-50) {
    	BPosition.x = width-50;
        BVelocity.x = BVelocity.x * -1;
    } else if (BPosition.x < 50) {
    	BPosition.x = 50;
        BVelocity.x = BVelocity.x * -1;
    }
    
    if (BPosition.y > height-50) {
    	BPosition.y = height-50;
        BVelocity.y = BVelocity.y * -1;
    } else if (BPosition.y < 50) {
    	BPosition.y = 50;
        BVelocity.y = BVelocity.y * -1;
    }
}

var reset = function(){
	x = 250;
	y = 250;
	x2 = 650;
	y2 = 250;
	BPosition.x = 450;
	BPosition.y = 250;
	BVelocity.x = 0;
	BVelocity.y = 0;
}

function score(){
	if(BPosition.x < 51 && BPosition.y > 150 && BPosition.y < 330){
		score2++;
		reset();
		if(score2 === 7){
			end2 = true;
		}

		
	}
	if(BPosition.x > 849 && BPosition.y > 150 && BPosition.y < 350){
		score1++;
		reset();
		if(score1 === 7){
			end1 = true;
		}
		
	}
	textSize(50);
	text(score1, 400, 150);
	text(score2, 500, 150);
}
function scoreCount(){
	if(score1 === 7){
		textSize(50);
		text("Player one won the match",300, 250 );
		score1 = 0;
		score2 = 0;
	}
	if (score2 === 7){
		textSize(50);
		text("Player two won the match",300, 250 );
		score1 = 0;
		score2 = 0;
	}
}

var buttonKey = function(xK, yK, widthK, heightK, textK){
	fill(255);
	rect(xK, yK, widthK, heightK);
	textAlign(LEFT);
	textSize(40)
	stroke(0);
	text(textK, x , y + vidthK -5);
}

var controls = function(){
	field();
	fill(217, 247, 246);
	
	textAlign(CENTER);
	rect(225, 100, 450, 300);
	
	buttonKey(width/2-150, height/2, 50,50, "W");


	if(mouseX >350 && mouseX < 550 && mouseY > 150 && mouseY < 200){
		fill(255,0,0);
		if(mouseIsPressed){
			start = true;
			menu = false;
			gameEnd1 = false;
			gameEnd2 = false;
			score1 = 0;
			score2 = 0;
		}
	}
	else{
		fill(255);
	}
	rect(350, 150, 200,50);
	textAlign(CENTER);
	textSize(36);
	text("START", 450, 190);
}

var startMenu = function(){
	//field();
	stroke(0);
	strokeWeight(5);
	fill(217, 247, 246);
	rect(350, 150, 200,250);


	if(mouseX >375 && mouseX < 525 && mouseY > 200 && mouseY < 250){
		fill(255,0,0);
		if(mouseIsPressed){
			start = true;
			menu = false;
			gameEnd1 = false;
			gameEnd2 = false;
			score1 = 0;
			score2 = 0;
		}
	}
	else{
		fill(255);
	}
	rect(375, 200, 150,50);
	textAlign(CENTER);
	textSize(36);
	text("START", 450, 240);


	if(mouseX >375 && mouseX < 525 && mouseY > 300 && mouseY < 350){
		fill(255,0,0);
		if(mouseIsPressed){
			contr = true;
			menu = false;
			gameEnd1 = false;
			gameEnd2 = false;
			score1 = 0;
			score2 = 0;
		}
	}
	else{fill(255);}
	rect(375, 300, 150,50);
	text("Controls", 450, 340);
}

var End1 = function(){
		textAlign(CENTER);
		textSize(50);
		fill(255);
		text("Player one won the match", 450, 100);
		start = false;
		menu = true;
	}
var End2 = function(){
		textAlign(CENTER);
		textSize(50);
		fill(255);
		text("Player two won the match", 450, 100);
		start = false;
		menu = true;
}

function draw() {
  // put drawing code here
  if(menu){
  	startMenu();
  }
  if(contr){
  	controls();
  }
  if(start){
  	field();
  	Player1();
  	Player2();
  	update();
  	update2();
  	checkEdges();
  	display();
  	score();
  	//scoreCount();
  }
  if(end1){
  	End1();
  }
  if(end2){
  	End2();
  }
  


}
