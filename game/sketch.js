var x = 250, y = 250;
var x2 = 650, y2 = 250;
var score1 = 0;
var score2 = 0;
var keys1 =[false, false,false,false];
var keys2 =[false, false,false,false];

function setup() {
  // put setup code here
 	createCanvas(900, 500);
 	BPosition = createVector(450,250);
 	BVelocity = createVector(0,0);
 	
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
	if(x > 75){if(keys1[0] === true){x-=5;}}
	if(x < 900/2-25){if(keys1[1] === true){x+=5;}}
    if(y > 75){if(keys1[2] === true){y-=5;}}
    if(y < 500-75){if(keys1[3] === true){y+=5;}}
    noStroke();
    fill(150);
    ellipse(x, y, 50,50);
};

var Player2 = function(){
	if(x2 > 475){if(keys2[0] === true){x2-=5;}}
	if(x2 < 825){if(keys2[1] === true){x2+=5;}}
    if(y2 > 75){if(keys2[2] === true){y2-=5;}}
    if(y2 < 425){if(keys2[3] === true){y2+=5;}}
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
	if(BPosition.x < 51 && BPosition.y > 150 && BPosition.y < 350){
		score1++;
		reset();
		
	}
	if(BPosition.x > 849 && BPosition.y > 150 && BPosition.y < 350){
		score2++;
		reset();
		
	}
	textSize(50);
	text(score1, 400, 150);
	text(score2, 500, 150);
}

function draw() {
  // put drawing code here
  field();
  Player1();
  Player2();
  update();
  update2();
  checkEdges();
  display();
  score();
  


}
