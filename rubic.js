class Rubic {
  constructor(blockSize) {
    this.cubies = [];
    for(let i = -1; i < 2; i++) {
      for(let j = -1; j < 2; j++) {
        for(let k = -1; k < 2; k++) {
          this.cubies.push(new Cubie(i,j,k,1));
        }
      }
    }
    this.move = null;
  }
  Shuffle() {
    for(let i = 0; i < 100; i++) {
      let r = floor(random(12));
      this.Rotate(moves[r]);
    }
  }
  Rotate(m) {
    if(abs(m.x) > 0) {
      this.RotateX(m.x, m.dir);
    } else if(abs(m.y) > 0) {
      this.RotateY(m.y, -m.dir);
    } else if(abs(m.z) > 0) {
      this.RotateZ(m.z, m.dir);
    }
  }
  RotateZ(side, cw) {
    for(let qb of this.cubies) {
      if(qb.mat.z === side) {
        let vec = createVector(qb.mat.x, qb.mat.y);
        vec.rotate(cw * HALF_PI);
        qb.updateZ(vec, cw);
      }
    }
  }
  RotateY(side, cw) {
    for(let qb of this.cubies) {
      if(qb.mat.y === side) {
        let vec = createVector(qb.mat.x, qb.mat.z);
        vec.rotate(cw * HALF_PI);
        qb.updateY(vec, cw);
      }
    }
  }
  RotateX(side, cw) {
    for(let qb of this.cubies) {
      if(qb.mat.x === side) {
        let vec = createVector(qb.mat.y, qb.mat.z);
        vec.rotate(cw * HALF_PI);
        qb.updateX(vec, cw);
      }
    }
  }
  Move(move) {
    this.move = move;
    this.move.Start();
  }
  render() {
    scale(50);
    if(this.move)
      this.move.Update();
    let _this = this;
    this.cubies.forEach(function(d, i) {
      push()
      if(_this.move) {
        if(abs(_this.move.z) > 0 && _this.move.z === d.mat.z) {
          rotateZ(_this.move.angle);
        } else if(abs(_this.move.x) > 0 && _this.move.x === d.mat.x) {
          rotateX(_this.move.angle);
        } else if(abs(_this.move.y) > 0 && _this.move.y === d.mat.y) {
          rotateY(_this.move.angle);
        }
      }
      d.render();
      pop();
    });
  }
}
