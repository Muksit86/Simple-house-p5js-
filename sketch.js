function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#40FFB1');
  
  //ground
  fill('#660D0F')
  
  rect(0, 225, 400, 175)
  
  
  //room
  fill('#01A3E9')
  rect(75, 100, 225, 200)
  
  
  //window 1
  stroke(255)
  strokeWeight(2)
  fill('#FFC90D')
  rect(100, 150, 50, 50)
  
  
  //window 2
  stroke(255)
  strokeWeight(2)
  fill('#FFC90D')
  rect(225, 150, 50, 50)
  
  
  //door
  fill('#FFC90D')
  strokeWeight(2)
  stroke(255)
  rect(165, 200, 50, 100)
  
  
  //roof
  fill('#FFE58A')
  stroke(0)
  strokeWeight(2)
  triangle(200, 20, 75, 100, 300, 100)
}
