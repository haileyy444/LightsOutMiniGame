import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 6, ncols = 6, chanceLightStartsOn = .5 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for(let row = 0; row < nrows; row++) {
      let rowArray = [];
      for (let col = 0; col < ncols; col++) {
        rowArray.push(Math.random() < chanceLightStartsOn );
      }
      
      initialBoard.push(rowArray);
    }
    return initialBoard;
  }
  return (
    hasWon() ? (
      <div> 
        <h2>You Win!</h2>
        <button onClick={restart}>Restart</button>
      </div>
      
    ) : (
      <div className="Game">
        <h2>Mini Game</h2>
        <h3>Turn all the lights off to win the game</h3>
        <table className="Board">
            <tbody>
              { board.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, colIdx) => (
                    <Cell key={`${rowIdx}-${colIdx}`} coord={`${rowIdx}-${colIdx}`} flipCellsAroundMe={() => flipCellsAround(`${rowIdx}-${colIdx}`)} isLit={cell} />
                  ))}
                </tr>
                ))}
            </tbody>
        </table>
      </div>
      
    )
  );

  function restart() {
    setBoard(createBoard());
  }
  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every(row => 
      row.every(cell => cell)
   );
  }

  function flipCellsAround(coord) {
    console.log("Flipping around: ", coord);
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
  

      const boardCopy = oldBoard.map(row => [...row]);
   



      const flipCell = (y, x) => {
        // if this coord is actually on board, flip it
       

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
          
        }
        
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x);
      flipCell(y-1, x);
      flipCell(y+1, x);
      flipCell(y, x-1);
      flipCell(y, x+1);
    
      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
}

export default Board;
