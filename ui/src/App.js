import logo from './logo.svg';
import './App.css';
import * as React from "react"

let gameBoard = {
  columns: [{
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }, {
    cells: [{
      color: ""
    }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]
  }]

}




function move(board, move) {
 let change = false
  function x (cell, index){
    if (!cell.color && !change ) {
      change = true
      return {color:move.color}
    }
    return cell
  }

  let newboard = {
    columns: board.columns.map((column, index) => {
      
      if (index == move.index) {
        let newCells = column.cells.map(x)
        return {
         
          cells: newCells
        }
      }
      return column
    })
  }
  console.log(newboard)
  return newboard

}





function App() {
  let [board, setBoard] = React.useState(gameBoard)

  return (
    <div className="App">



      <div className="ui-board">
        {board.columns.map((column, index) => <div key={index} onClick={() => { 
    let newboard = move(board, { index, color:"A" })
    console.log(newboard)
    setBoard(newboard) }} className="ui-column"> {column.cells.map((cell, index) =>
          <div key={index} onClick={console.log} className={`ui-cell ${cell.color}`} >  </div>)} </div>)}

      </div>

    </div>
  );
}

export default App;
