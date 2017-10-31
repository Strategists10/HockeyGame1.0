var x =5;
var x = 250, y = 250;
var keys =[false, false,false,false];
/*
function keyPressed() {
  if (key.toString() === 'a'){  keys[0] = true;}
  if (key.toString() === 'd'){  keys[1] = true;}
  if (key.toString() === 'w'){  keys[2] = true;}
  if (key.toString() === 's'){  keys[3] = true;}
};

function keyReleased() {
  if (key.toString() === 'a'){  keys[0] = false;}
  if (key.toString() === 'd'){  keys[1] = false;}
  if (key.toString() === 'w'){  keys[2] = false;}
  if (key.toString() === 's'){  keys[3] = false;}
};

var Player1 = function(){
	if(x>25){if(keys[0] === true){x--;}}
	if(x<375){if(keys[1] === true){x++;}}
    if(keys[2] === true){y--;}
    if(keys[3] === true){y++;}
    ellipse(x, y, 50,50);
};
*/


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

function setup() {
  // put setup code here
 	createCanvas(900, 500);
}

function draw() {
  // put drawing code here
  field();
  
  


}
function keyPressed(){
  	ellipse(x, y, 50,50);
  }