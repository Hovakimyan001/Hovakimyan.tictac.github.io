import { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  // let squares = [null,null,null,null,null,null,null,null,null] poxarinum  (new Array(9).fill(null)) karch greladzev ete elementner@ nuynnen linum
  const [count, setCount] = useState(0);
  const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const enterElement = (e) => {
    let data = e.target.getAttribute("data");
    if (squares[data] === null) {
      squares[data] = count % 2 == 0 ? "X" : "O";
      e.target.style.textShadow =
        count % 2 == 0
          ? "0 0 2px gold,0 0 5px gold,0 0 10px gold,0 0 20px gold,0 0 50px gold,0 0 100px gold,0 0 200px gold"
          : "0 0 2px #BC13FE,0 0 5px #BC13FE,0 0 10px #BC13FE,0 0 20px #BC13FE,0 0 50px #BC13FE,0 0 100px #BC13FE,0 0 200px #BC13FE";
      e.target.children[0].classList.toggle("shake");
      setCount(count + 1);
      setSquares(squares);
      winner();
    }
  };

  const winner = () => {
    debugger;
    for (let i = 0; i < winnerLine.length; i++) {
      let line = winnerLine[i];
      let win = count % 2 == 0 ? "X" : "O";
      if (
        squares[line[0]] === win &&
        squares[line[1]] === win &&
        squares[line[2]] === win &&
        count !== 8
      ) {
        alert(win + " win");
        break;
      } else if (
        squares[line[0]] === win &&
        squares[line[1]] === win &&
        squares[line[2]] === win &&
        count == 8
      ) {
        alert(win + " win");
        break;
      }
      if (
        squares[line[0]] !== win &&
        squares[line[1]] !== win &&
        squares[line[2]] === win &&
        count == 8
      ) {
        alert("nichya");
        break;
      }
    }
  };

  return (
    <div className="App">
      <div className="tic-tac-toe">
        {squares.map((square, index) => {
          return (
            <div
              className="grid"
              key={index}
              data={index}
              onClick={(e) => {
                enterElement(e);
              }}
            >
              <span>{square}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
