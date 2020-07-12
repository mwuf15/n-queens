/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// start at row 0, column 0
// place a rook
// check if there is a conflict
// if (conditional) {
//   // if there is a conflict - logic!
//   do something
// // else
// } else {
//   // if there is no conflict - logic! (maybe repeat? woo!!)
//   do a different thing!
// }



window.findNRooksSolution = function(n) {
  var solution = []; //fixme                solution = [[0, 0],]
  var board = new Board({n: n});    //board = [ [0 ,0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]]
  // console.log(board.set());
  // console.log('this is what a rook board looks like', board);
  //create board set to n

  // recursion function
  // let checkVaildPlacement = function(board) {
    //iterator over this row

    board.togglePiece(0,0)               //(0,0) [1, 0 , 0 , 0]

    for (let i = 0; i < board.length; i++) {    //[0 , 0 , 0 , 0]
      // toggle first piece on the first  index of the row
      //make row as board[i]
      var row = board[i]                      //[0 , 0 , 0 , 0]
      if (board.hasAnyRooksConflicts(row)) {       //false
        board.togglePiece(i,i)
      } else {
        solution.push([i, i])

      }
    }

  // }
  // checkVaildPlacement(board)
console.log('this is solution', board)
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
