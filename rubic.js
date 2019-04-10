class Rubic {
  constructor(blockSize) {
    this.cubies = [];
    for(let i = -1; i < 2; i++) {
      for(let j = -1; j < 2; j++) {
        for(let k = -1; k < 2; k++) {
          this.cubies.push(new Cubie(i*blockSize,j*blockSize,k*blockSize,blockSize));
        }
      }
    }
    this.leftSide = [0,2,8,6,4,1,5,7,3];
    this.rightSide = [18,20,26,24,22,19,23,25,21];
    this.frontSide = [2,20,26,8,14,5,11,23,17];
    this.backSide = [18,24,6,0,12,9,21,15,3];
    this.upSide = [0,2,18,20,10,9,1,11,19];
    this.downSide = [6,8,24,26,16,7,15,17,25];
  }
  SwapInArray(i, j) {
    let tmpCoord = {
      x:this.cubies[i].x,
      y:this.cubies[i].y,
      z:this.cubies[i].z
    };
    this.cubies[i].x = this.cubies[j].x;
    this.cubies[i].y = this.cubies[j].y;
    this.cubies[i].z = this.cubies[j].z;
    this.cubies[j].x = tmpCoord.x;
    this.cubies[j].y = tmpCoord.y;
    this.cubies[j].z = tmpCoord.z;
    let temp = this.cubies[i].copy();
    this.cubies[i] = this.cubies[j].copy();
    this.cubies[j] = temp;
  }
  SwapCubies(arr, cw) {
    let corners = arr.slice(0,4);
    let sides = arr.slice(5);
    if(cw) {
      corners = corners.reverse();
      sides = sides.reverse();
    }
    for(let i = 0; i < corners.length-1; i++) {
      this.SwapInArray(corners[i], corners[i + 1]);
    }
    for(let i = 0; i < sides.length - 1; i++) {
      this.SwapInArray(sides[i],sides[i+1]);
    }
  }
  RotateZ(side, cw) {
    if(side) {
      for(let a = 0; a < this.frontSide.length; a++) {
        this.cubies[this.frontSide[a]].RotateZ(cw);
      }
      this.SwapCubies(this.frontSide, cw);
    } else {
      for(let a of this.backSide) {
        this.cubies[a].RotateZ(!cw);
      }
      this.SwapCubies(this.backSide, !cw);
    }
  }
  RotateY(side, cw) {
    if(side) {
      for(let a of this.leftSide) {
        this.cubies[a].RotateY(cw);

      }
      this.SwapCubies(this.leftSide,cw);

    } else {
      for(let a of this.rightSide) {
        this.cubies[a].RotateY(!cw);
      }
      this.SwapCubies(this.rightSide,!cw);
    }
  }
  RotateX(side, cw) {
    if(side) {
      for(let a of this.upSide) {
        this.cubies[a].RotateX(cw);
      }
      this.SwapCubies(this.upSide, cw);
    } else {
      for(let a of this.downSide) {
        this.cubies[a].RotateX(!cw);
      }
      this.SwapCubies(this.downSide, !cw);
    }
  }
  render() {
    this.cubies.forEach(function(d, i) {d.render();});
  }
}
