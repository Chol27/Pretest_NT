import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [mode, setMode] = useState("Prime");

  const handleSelectMode = (e) => {
    setMode(e.target.value);
  };

  const onChangeNumber = (e) => {
    if (e.target.value < 0) {
      setNumber(1);
    } else if (e.target.value > 0) {
      setNumber(Math.round(e.target.value));
    } else {
      setNumber(e.target.value);
    }
  };

  const isQualified = () => {
    if (mode === "Prime") {
      if (number === 0 || number === 1) return false;
      if (number === 2) return true;
      for (let i = 2; i < Math.sqrt(number) + 1; i += 1) {
        if (number % i === 0) return false;
      }
      return true;
    } else {
      const stringNumber = number.toString();
      const numLength = stringNumber.length;
      for (let i = 0; i < Math.ceil(numLength / 2); i += 1) {
        if (stringNumber[i] !== stringNumber[numLength - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "200px" }}>
        <input
          type="number"
          style={{ width: "150px" }}
          value={number}
          onChange={(e) => onChangeNumber(e)}
        ></input>
      </div>
      <div
        style={{
          width: window.screen.width - 500,
          overflowX: "auto",
          borderLeft: "3px solid black",
          borderRight: "3px solid black",
        }}
      >
        <div style={{ width: "100px" }}>
          <select value={mode} onChange={(e) => handleSelectMode(e)}>
            <option value="Prime">isPrime</option>
            <option value="Fibonacci">isFibonacci</option>
          </select>
        </div>
      </div>
      <div style={{ width: "300px" }}>{isQualified() ? "true" : "false"}</div>
    </div>
  );
}

export default App;
