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
  render() {
    scale(50);
    this.cubies.forEach(function(d, i) {d.render();});
  }
}
