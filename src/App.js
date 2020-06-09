import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

let inputColorAll = "";

function App() {
  let count = useSelector((state) => state.count);
  let color = useSelector((state) => state.color);
  let textColor = useSelector((state) => state.textColor);
  let dispatch = useDispatch();

  const increaseNum = () => {
    dispatch({ type: "INCREMENT" });
    console.log("Increase number");
  };

  const renderBoxes = () => {
    let tempArray = [];

    for (let i = 0; i < count; i++) {
      tempArray.push(
        <div
          style={{
            border: "3px solid black",
            width: "200px",
            height: "100px",
            marginTop: "10px",
            textAlign: "center",
            backgroundColor: `${color}`,
            color: `${textColor}`,
          }}
        >
          HEYYYYAYAYAYAYAYYA
          <input
            type="text"
            placeholder="Enter a color here!"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_SPECIFIC_BOX_COLOR",
                payload: { color: e.target.value, idx: i },
              })
            }
          ></input>
        </div>
      );
    }
    return tempArray;
  };

  if (count < 0) {
    return <h1>AAAAA YOU ARENT SUPPOSED TO DO THAT!</h1>;
  }

  return (
    <div className="App">
      <h1>Counter App</h1> <h2>{count}</h2>
      <div>
        <button onClick={() => increaseNum()}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "CHANGE_BOX_COLOR", payload: e.target.value })
        }
        placeholder="Change all of the boxes color here..."
        style={{ marginTop: "10px", width: "250px" }}
      ></input>
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "GET_NUMBER_CHANGE", payload: e.target.value })
        }
        placeholder="Enter the amount to add or deduce"
        style={{ width: "250px", marginTop: "20px" }}
      ></input>
      {renderBoxes()}
    </div>
  );
}

export default App;
