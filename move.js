class Move {
  constructor(x, y, z, dir, cube) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
    this.cube = cube;
    this.animating = false;
    this.finished = false;
    this.angle = 0;
    this.speed = 0.1;
  }
  IsEqual(o) {
    return o &&
      o.x === this.x &&
      o.y === this.y &&
      o.z === this.z &&
      o.dir === this.dir;
  }
  Copy() {
    return new Move(this.x, this.y, this.z, this.dir, this.cube);
  }
  Reverse() {
    this.dir *= -1;
  }
  Update() {
    if(this.animating) {
      this.angle += this.dir * this.speed;
      if(abs(this.angle) > HALF_PI) {
        this.animating = false;
        this.angle = 0;
        this.finished = true;
        this.cube.Rotate(this);
      }
    }
  }
  Start() {
    this.angle = 0;
    this.finished = false;
    this.animating = true;
  }
}
