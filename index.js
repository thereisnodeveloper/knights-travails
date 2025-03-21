//Rules to follow
//Node that is picked MUST NOT bring knight farther away from the target square

//pass in array of coordinates
class ChessNode {
  constructor(coord) {
    this.coord = coord;
    this.neighbors = this.getValidMoves()
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
  ]
  getValidMoves() {
    const validCoords = [];
    const result = this.#offsets.reduce((validCoords, offset) => {
      const newCoordX = offset[0] + this.coord[0];
      const newCoordY = offset[1] + this.coord[1];
      //0~7 are the only valid squares
      if (newCoordX <= 7 && newCoordX >= 0 && newCoordY >= 0 && newCoordY <= 7) {
        validCoords.push([newCoordX, newCoordY]);
      }
      return validCoords;
    }, []);
    return result;
  }  
}
//TODO: write algorithm for navigating graph

//TODO: create graph's adjacency list
//TODO: create function to create adjList
function makeChessBoardMatrix() {
  //chess board has 8x8 squares
  const boardlength = 8
  const board = []
  for (let rowIndex = 0; rowIndex < boardlength ; rowIndex++) {
    const row = []
    for(let colIndex = 0; colIndex < boardlength ; colIndex++ ){  
      row.push(new ChessNode([rowIndex,colIndex]))
    }
    board.push(row)
  }
  return board
}
const theBoard = makeChessBoardMatrix()
console.log(theBoard)
//??? would it be okay to change the contents of the nodes themselves, instead
//of keeping track of paths in the searcher?

function searchPath(){
  //get CURRENTNODE's neighbors
  
  //if no PATH array
  //loop for each neighbor, create a PATH array
    // PATHS[].push CURRENTNODE
  // save PATHS (list of nodes visited so far)
  //if visited before in current JOURNEY? skip, else..
    //look for NODE in CURRENTPATH


  //check if any match TARGETSQUARE
    //if there aren't,continue 
    //loop repeat for all neighbors
    //NOTE: the current path that's been 
    //if there are, set MAXJUMPS = PATH.length
    

  //loop for each neighbor, RECURSIVELY call itself fn(currentNode.neighbor)
    //pass PATH[]
    //pass numOfJumps
    //

  //fn get shortest path
  //return PATH[].map + max

  //TODO add constraint to algorithm
  //DONT jump more times than MAXJUMPS
  //GET CURRENTPOSITION vs. TARGETPOSITION
  // PREFER paths that are closest to the to the vector
  


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
