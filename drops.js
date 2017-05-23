var mlen = 50;
var m = [mlen];


function setup() {
  createCanvas(640, 640, [WEBGL]);
 noStroke();
 
 for(var i = 0; i < mlen; i++) {
   m[i] = new drop();
 }
 
}

function draw() {
  background(255);
  
  for(i = 0; i < mlen; i++) {
    m[i].update();
    m[i].checkBottom();
    m[i].display();
  }
  
}
