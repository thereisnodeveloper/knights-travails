//Rules to follow
//Node that is picked MUST NOT bring knight farther away from the target square



export class ChessNode {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.neighbors = this.getValidMoves();
  }
  #offsets = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];
  getValidMoves() {
    const validCoords = [];
    const result = this.#offsets.reduce((validCoords, offset) => {
      const newCoordX = offset[0] + this.coordinates[0];
      const newCoordY = offset[1] + this.coordinates[1];
      //0~7 are the only valid squares
      if (newCoordX <= 7 && newCoordX >= 0 && newCoordY >= 0 && newCoordY <= 7) {
        validCoords.push([newCoordX, newCoordY]);
      }
      return validCoords;
    }, []);
    return result;
  }
}
