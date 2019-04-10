
let cubie;
const blockSize = 50;
function setup() {
  createCanvas(1600, 800, WEBGL);
  cubie = new Rubic(blockSize);
}
function keyPressed() {
  if(key == 'f') {
    cubie.RotateZ(true, true);
  } else if(key == 'F'){
    cubie.RotateZ(true, false);
  } else if(key == 'b'){
    cubie.RotateZ(false, true);
  } else if(key == 'B'){
    cubie.RotateZ(false, false);
  } else if(key == 'l'){
    cubie.RotateY(true, true);
  } else if(key == 'L'){
    cubie.RotateY(true, false);
  } else if(key == 'r'){
    cubie.RotateY(false, true);
  } else if(key == 'R'){
    cubie.RotateY(false, false);
  } else if(key == 'u'){
    cubie.RotateX(true, true);
  } else if(key == 'U'){
    cubie.RotateX(true, false);
  } else if(key == 'd'){
    cubie.RotateX(false, true);
  } else if(key == 'D'){
    cubie.RotateX(false, false);
  }
}
function draw() {
  background(0);
  orbitControl();
cubie.render();

}
