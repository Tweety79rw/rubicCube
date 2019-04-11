
let cubie;
const moves = ['f','b','l','r','u','d'];
let sequence = '';
const blockSize = 50;
function flipChar(c) {
  if(c === c.toUpperCase()) {
    return c.toLowerCase();
  }
  return c.toUpperCase();
}
function setup() {
  createCanvas(1600, 800, WEBGL);
  cubie = new Rubic(blockSize);
  for(let i = 0; i < 200; i++) {
    let index = floor(random(moves.length));
    let move = moves[index];
    if(random() < 0.5) {
      move = move.toUpperCase();
    }
    sequence += move;
  }
  for(let i = sequence.length - 1; i >= 0; i--) {
    let move = flipChar(sequence[i]);
    sequence += move;
  }
}
function keyPressed() {
  preformMove(key);
}
function preformMove(key) {
  if(key == 'f') {
    cubie.RotateZ(1, 1);
  } else if(key == 'F'){
    cubie.RotateZ(1, -1);
  } else if(key == 'b'){
    cubie.RotateZ(-1, 1);
  } else if(key == 'B'){
    cubie.RotateZ(-1, -1);
  } else if(key == 'l'){
    cubie.RotateX(-1, 1);
  } else if(key == 'L'){
    cubie.RotateX(-1, -1);
  } else if(key == 'r'){
    cubie.RotateX(1, 1);
  } else if(key == 'R'){
    cubie.RotateX(1, -1);
  } else if(key == 'u'){
    cubie.RotateY(-1, 1);
  } else if(key == 'U'){
    cubie.RotateY(-1, -1);
  } else if(key == 'd'){
    cubie.RotateY(1, 1);
  } else if(key == 'D'){
    cubie.RotateY(1, -1);
  }
}
let ind = 0;
function draw() {
  if(frameCount % 5 == 0) {
    if(ind < sequence.length) {
      preformMove(sequence[ind]);
      ind++;
    }
  }
  background(51);
  orbitControl();
  cubie.render();

}
