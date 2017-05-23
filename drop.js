function drop() {
  this.position = createVector(random(0, width), random(-height, 0));
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 2);
  this.size = createVector(0.01, 0.01);
  this.rate = createVector(0.01, 0.01);
  
  
  this.update = function() {
    this.size.add(this.rate);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  };
  
  this.display = function() {
    fill(0, 0, (255*this.velocity.y), 100);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  };

  this.checkBottom = function() {
    
     if (this.position.y > height * 1.5) {
       this.velocity.y = random(0, 1);
       this.position.y = (random(0, width), random(-height, 0));
     }
  };
}