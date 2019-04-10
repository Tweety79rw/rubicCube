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
    this.rightSide = [18,19,20,21,22,23,24,25,26];
    this.frontSide = [2,20,26,8,14,5,11,23,17];
    this.backSide = [0,3,6,9,12,15,18,21,24];
    this.upSide = [0,1,2,9,10,11,18,19,20];
    this.downSide = [6,7,8,15,16,17,24,25,26];
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
    // let prev = {
    //   x:this.cubies[corners[0]].x,
    //   y:this.cubies[corners[0]].y,
    //   z:this.cubies[corners[0]].z};
    //let temp = this.cubies[corners[0]];
    for(let i = 0; i < corners.length-1; i++) {
      this.SwapInArray(corners[i], corners[i + 1]);
      // this.cubies[corners[i]].x = this.cubies[corners[i + 1]].x;
      // this.cubies[corners[i]].y = this.cubies[corners[i + 1]].y;
      // this.cubies[corners[i]].z = this.cubies[corners[i + 1]].z;
    }
    //this.SwapInArray(corners[corners.length -1],corners[0]);
    // this.cubies[corners[corners.length -1]].x = prev.x;
    // this.cubies[corners[corners.length -1]].y = prev.y;
    // this.cubies[corners[corners.length -1]].z = prev.z;
    // prev = {
    //   x:this.cubies[sides[0]].x,
    //   y:this.cubies[sides[0]].y,
    //   z:this.cubies[sides[0]].z
    // };
    for(let i = 0; i < sides.length - 1; i++) {
      this.SwapInArray(sides[i],sides[i+1]);
      // this.cubies[sides[i]].x = this.cubies[sides[i + 1]].x;
      // this.cubies[sides[i]].y = this.cubies[sides[i + 1]].y;
      // this.cubies[sides[i]].z = this.cubies[sides[i + 1]].z;
    }
    //this.SwapInArray(sides[sides.length -1],sides[0]);
    // this.cubies[sides[sides.length -1]].x = prev.x;
    // this.cubies[sides[sides.length -1]].y = prev.y;
    // this.cubies[sides[sides.length -1]].z = prev.z;
  }
  RotateZ(side, cw) {
    if(side) {
      for(let a = 0; a < this.frontSide.length; a++) {
        this.cubies[this.frontSide[a]].RotateZ(cw);
      }
      this.SwapCubies(this.frontSide, !cw);
    } else {
      for(let a of this.backSide) {
        this.cubies[a].RotateZ(cw);
      }
      this.SwapCubies(this.backSide, cw);
    }
  }
  RotateY(side, cw) {
    if(side) {
      for(let a of this.leftSide) {
        this.cubies[a].RotateY(cw);

      }
      this.SwapCubies(this.leftSide,!cw);

    } else {
      for(let a of this.rightSide) {
        this.cubies[a].RotateY(cw);
      }
      this.SwapCubies(this.rightSide,cw);
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
        this.cubies[a].RotateX(cw);
      }
      this.SwapCubies(this.downSide, cw);
    }
  }
  render() {
    this.cubies.forEach(function(d) {d.render();});
  }
}
