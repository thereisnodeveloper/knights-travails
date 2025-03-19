//Rules to follow
//Node that is picked MUST NOT bring knight farther away from the target square

//pass in array of coordinates
class ChessNode {
  constructor(coord) {
    this.coord = coord;
  }
}

//TODO: create graph's adjacency list
//TODO: create function to create adjList
function makeChessBoardMatrix() {
  //chess board has 8x8 squares squares
  return Array(8).fill(Array(8));
}
function createVertex(coordX, coordY) {
  new ChessNode([]);
}
//return a list of adjacent ChessNodes
function getAdjVertices() {
  //representing 8 directions knight can travel
  const offsets = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];

  function getValidMoves(currentCoords) {
    const validCoords = [];
    const result = offsets.reduce((validCoords, offset) => {
      const newCoordX = offset[0] + currentCoords[0];
      const newCoordY = offset[1] + currentCoords[1];
      //0~7 are the only valid squares
      if (newCoordX <= 7 && newCoordX >= 0 && newCoordY >= 0 && newCoordY <= 7) {
        validCoords.push([newCoordX, newCoordY]);
      }
      return validCoords;
    }, []);
    return result;
  }
}
getAdjVertices();

function validateSquare() {}

//TODO: use class to represent nodes
//TODO: populate 8x8 array with nodes

adjList = [{ coord: [0, 0], adjacent: [[0, 2]] }];
// console.log(chessBoardToAdjList());

//Start

//Recursive Bread First Search

//base case
//get to target square
//takes

//does nodeBeingConsidered contain the coordinates [x,y]  (target square)?
//if not check all of neighbors for same,
//and check their neighbors's neighbors, etc.
