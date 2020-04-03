/* .robot is the extension for this language */

const END_CELL = 5;
let currentCell = 0;
while (currentCell <= END_CELL) {
  if (!obstacle(currentCell)) {
    move();
  }
  currentCell++;
}