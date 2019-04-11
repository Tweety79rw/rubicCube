class Face {
  constructor(normal, color) {
    this.normal = normal;
    this.color = color;
  }
  turnZ(angle) {
    let vec2 = createVector();
    vec2.x = round(this.normal.x * cos(angle) - this.normal.y * sin(angle));
    vec2.y = round(this.normal.x * sin(angle) + this.normal.y * cos(angle));
    vec2.z = this.normal.z;
    this.normal = vec2;
  }
  turnY(angle) {
    let vec2 = createVector();
    vec2.x = round(this.normal.x * cos(angle) - this.normal.z * sin(angle));
    vec2.z = round(this.normal.x * sin(angle) + this.normal.z * cos(angle));
    vec2.y = this.normal.y;
    this.normal = vec2;
  }
  turnX(angle) {
    let vec2 = createVector();
    vec2.y = round(this.normal.y * cos(angle) - this.normal.z * sin(angle));
    vec2.z = round(this.normal.y * sin(angle) + this.normal.z * cos(angle));
    vec2.x = this.normal.x;
    this.normal = vec2;
  }
  render() {
    push();
    rectMode(CENTER);
    fill(this.color);
    translate(this.normal.x * 0.5, this.normal.y * 0.5, this.normal.z * 0.5);
    rotate(HALF_PI, createVector(this.normal.y, this.normal.x, this.normal.z));
    rect(0,0,1,1);
    pop();
  }
}
