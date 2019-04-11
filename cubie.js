class Cubie {
  constructor(x, y, z, d) {
    this.mat = createVector(x, y, z);
    this.d = d;
    this.faces = [
      new Face(createVector(0, 0,-1), color(0, 0, 255)),
      new Face(createVector(0, 0, 1), color(0, 255, 0)),
      new Face(createVector(0,-1, 0), color(255)),
      new Face(createVector(0, 1, 0), color(255,255,0)),
      new Face(createVector(-1, 0, 0), color(255, 165, 0)),
      new Face(createVector(1, 0, 0), color(255, 0, 0))
    ];
    this.highlight = false;
  }
  updateZ(vec, cw) {
    this.mat.x = round(vec.x);
    this.mat.y = round(vec.y);
    for(let f of this.faces) {
      f.turnZ(cw * HALF_PI);
    }
  }
  updateY(vec, cw) {
    this.mat.x = round(vec.x);
    this.mat.z = round(vec.y);
    for(let f of this.faces) {
      f.turnY(cw * HALF_PI);
    }
  }
  updateX(vec, cw) {
    this.mat.y = round(vec.x);
    this.mat.z = round(vec.y);
    for(let f of this.faces) {
      f.turnX(cw * HALF_PI);
    }
  }
  render() {
    push();
    stroke(80);
    noFill();
    translate(this.mat.x, this.mat.y, this.mat.z);

    for(let f of this.faces) {
      f.render();
    }
    if(this.highlight) { // debugging
      fill(255,0,0);
    }
    box(this.d);
    pop();
  }
}
