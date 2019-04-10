class Cubie {
  constructor(x, y, z, d) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.d = d;
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;
    this.c = {
      UP: color(255),
      DOWN: color(255,255,0),
      LEFT: color(255, 165, 0),
      RIGHT: color(255, 0, 0),
      FRONT: color(0, 255, 0),
      BACK: color(0, 0, 255)
    }
  }
  copy() {
    let ret = new Cubie(this.x, this.y, this.z, this.d);
    ret.rotX = this.rotX;
    ret.rotY = this.rotY;
    ret.rotZ = this.rotZ;
    return ret;
  }
  RotateZ(cw) {
    // if(cw) {
    //   let temp = this.c.LEFT;
    //   this.c.LEFT = this.c.DOWN;
    //   this.c.DOWN = this.c.RIGHT;
    //   this.c.RIGHT = this.c.UP;
    //   this.c.UP = temp;
    // } else {
    //   let temp = this.c.RIGHT;
    //   this.c.RIGHT = this.c.DOWN;
    //   this.c.DOWN = this.c.LEFT;
    //   this.c.LEFT = this.c.UP;
    //   this.c.UP = temp;
    // }
    this.rotZ += cw?PI/2:-PI/2;
  }
  RotateY(cw) {
    // if(cw) {
    //   let temp = this.c.FRONT;
    //   this.c.FRONT = this.c.DOWN;
    //   this.c.DOWN = this.c.BACK;
    //   this.c.BACK = this.c.UP;
    //   this.c.UP = temp;
    // } else {
    //   let temp = this.c.BACK;
    //   this.c.BACK = this.c.DOWN;
    //   this.c.DOWN = this.c.FRONT;
    //   this.c.FRONT = this.c.UP;
    //   this.c.UP = temp;
    // }
    this.rotX += cw?PI/2:-PI/2;
  }
  RotateX(cw) {
    // if(cw) {
    //   let temp = this.c.LEFT;
    //   this.c.LEFT = this.c.FRONT;
    //   this.c.FRONT = this.c.RIGHT;
    //   this.c.RIGHT = this.c.BACK;
    //   this.c.BACK = temp;
    // } else {
    //   let temp = this.c.LEFT;
    //   this.c.LEFT = this.c.BACK;
    //   this.c.BACK = this.c.RIGHT;
    //   this.c.RIGHT = this.c.FRONT;
    //   this.c.FRONT = temp;
    // }
    this.rotY += cw?PI/2:-PI/2;
  }
  render() {
    push();
    stroke(80);

    translate(this.x + this.d / 2, this.y + this.d / 2, this.z - this.d / 2);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    let r = this.d / 2;


    beginShape();
    fill(this.c.FRONT);
    vertex(-r, -r, r);
    vertex(r, -r, r);
    vertex(r, r, r);
    vertex(-r, r, r);
    // vertex(-r, -r, r);
    endShape(CLOSE);
    beginShape();
    fill(this.c.BACK);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(-r, r, -r);
    // vertex(-r, -r, -r);
    endShape(CLOSE);
    beginShape();
    fill(this.c.UP);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, -r, r);
    vertex(-r, -r, r);
    // vertex(-r, -r, -r);
    endShape(CLOSE);
    beginShape();
    fill(this.c.DOWN);
    vertex(-r, r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(-r, r, r);
    // vertex(-r, r, -r);
    endShape(CLOSE);
    beginShape();
    fill(this.c.LEFT);
    vertex(-r, -r, -r);
    vertex(-r, r, -r);
    vertex(-r, r, r);
    vertex(-r, -r, r);
// vertex(-r, -r, -r);
    endShape(CLOSE);
    fill(this.c.RIGHT);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(r, -r, r);
//     vertex(r, -r, -r);
    endShape(CLOSE);
    pop();
  }
}
