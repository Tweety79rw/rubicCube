
let cubie;
let moves;
let pg;
let sequence = [];
const blockSize = 50;
function setup() {
  createCanvas(1600, 800, WEBGL);
  createDiv('key = clock wise<br>shift + key = counter clock wise<br>f = front<br>b = back<br>l = left<br>r = right<br>u = up<br>d = down<br>space = shuffle').style('float:right');
  cubie = new Rubic(blockSize);
  moves = [
    new Move(0, 0, 1, 1, cubie),
    new Move(0, 0, 1, -1, cubie),
    new Move(0, 0, -1, 1, cubie),
    new Move(0, 0, -1, -1, cubie),
    new Move(1, 0, 0, 1, cubie),
    new Move(1, 0, 0, -1, cubie),
    new Move(-1, 0, 0, 1, cubie),
    new Move(-1, 0, 0, -1, cubie),
    new Move(0, -1, 0, 1, cubie),
    new Move(0, -1, 0, -1, cubie),
    new Move(0, 1, 0, 1, cubie),
    new Move(0, 1, 0, -1, cubie)];
  // let prevMove;
  // for(let i = 0; i < 200; i++) {
  //   let index = floor(random(moves.length));
  //   let move = moves[index];
  //   if(prevMove && move.IsEqual(prevMove.Reverse())) {
  //     i--;
  //     continue;
  //   }
  //   sequence.push(move);
  //   prevMove = move.Copy();
  // }
  // //cubie.Move(sequence[0]);
  // for(let i = sequence.length - 1; i >= 0; i--) {
  //   let move = sequence[i].Copy();
  //   move.Reverse();
  //   sequence.push(move);
  // }
}
function keyPressed() {
  preformMove(key);
  if(key == ' ') {
    cubie.Shuffle();
  }
}
function preformMove(key) {
  if(!cubie.move || (cubie.move && !cubie.move.animating)) {
    if(key == 'f') {
      cubie.Move(moves[0]);
    } else if(key == 'F'){
      cubie.Move(moves[1]);
    } else if(key == 'b'){
      cubie.Move(moves[2]);
    } else if(key == 'B'){
      cubie.Move(moves[3]);
    } else if(key == 'l'){
      cubie.Move(moves[6]);
    } else if(key == 'L'){
      cubie.Move(moves[7]);
    } else if(key == 'r'){
      cubie.Move(moves[4]);
    } else if(key == 'R'){
      cubie.Move(moves[5]);
    } else if(key == 'u'){
      cubie.Move(moves[8]);
    } else if(key == 'U'){
      cubie.Move(moves[9]);
    } else if(key == 'd'){
      cubie.Move(moves[10]);
    } else if(key == 'D'){
      cubie.Move(moves[11]);
    }
  }
}
let ind = 0;
function draw() {
  background(51);

  //pg.background(51);

  // if(ind < sequence.length - 1) {
  //   if(sequence[ind].finished) {
  //     ind++;
  //     cubie.Move(sequence[ind]);
  //   }
  // }

  orbitControl();

  cubie.render();


}
