import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
      setExpression("");
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setInput(result);
        setExpression(result);
      } catch (error) {
        setInput("Error");
      }
    } else if (value === ".") {
      if (!expression.split(/[-+*/]/).pop().includes(".")) {
        const newExpression = expression + value;
        setExpression(newExpression);
        setInput(newExpression);
      }
    } else if (["+", "*", "/"].includes(value)) {
      const sanitizedExpression = expression.replace(/[-+*/]+$/, "");
    
      const newExpression = sanitizedExpression + value; 
      setExpression(newExpression); 
      setInput(value); 
    } else if (value === "-") {
      const newExpression = expression + value;
      setExpression(newExpression); 
      setInput(value);   
    } else {
      const newExpression = 
        expression === "0" && value === "0"
          ? "0"
          : expression + value;
      setExpression(newExpression);
      setInput(newExpression);
    }
  };  

  return (
    <div className="App">
      <div className='calculator-container'>
        <div id='display'>{input}</div>
        <div>
          <button id='clear' onClick={() => handleClick("AC")}>AC</button>
          <button id='divide' onClick={() => handleClick("/")}>/</button>
          <button id='multiply' onClick={() => handleClick("*")}>*</button>
        </div>
        <div>
          <button id='seven' onClick={() => handleClick("7")}>7</button>
          <button id='eight' onClick={() => handleClick("8")}>8</button>
          <button id='nine' onClick={() => handleClick("9")}>9</button>
          <button id='subtract' onClick={() => handleClick("-")}>-</button>
        </div>
        <div>
          <button id='four' onClick={() => handleClick("4")}>4</button>
          <button id='five' onClick={() => handleClick("5")}>5</button>
          <button id='six' onClick={() => handleClick("6")}>6</button>
          <button id='add' onClick={() => handleClick("+")}>+</button>
        </div>
        <div>
          <button id='one' onClick={() => handleClick("1")}>1</button>
          <button id='two' onClick={() => handleClick("2")}>2</button>
          <button id='three' onClick={() => handleClick("3")}>3</button>
          <button id="equals" onClick={() => handleClick("=")}>=</button>
        </div>
        <div>
          <button id='zero' onClick={() => handleClick("0")}>0</button>
          <button id='decimal' onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
