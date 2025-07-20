import React, { useState } from "react";
import "../Calc.css";

function Button() {
  const [result, setresult] = useState("");
  const handleClick = (e) => {
    setresult(result.concat(e.target.value));
  };
  const ClearHandle = () => {
    setresult("");
  };
  const Calculate = () => {
    setresult(eval(result).toString());
  };
  const crossHandle=()=>{
    setresult(result.slice(0,-1))
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="0" id="answer" value={result} />
      </div>

      <input type="button" value="9" className="button" onClick={handleClick} />
      <input type="button" value="8" className="button" onClick={handleClick} />
      <input type="button" value="7" className="button" onClick={handleClick} />
      <input type="button" value="6" className="button" onClick={handleClick} />
      <input type="button" value="5" className="button" onClick={handleClick} />
      <input type="button" value="4" className="button" onClick={handleClick} />
      <input type="button" value="3" className="button" onClick={handleClick} />
      <input type="button" value="2" className="button" onClick={handleClick} />
      <input type="button" value="1" className="button" onClick={handleClick} />
      <input type="button" value="0" className="button" onClick={handleClick} />
      <input type="button" value="+" className="button" onClick={handleClick} />
      <input type="button" value="-" className="button" onClick={handleClick} />
      <input type="button" value="*" className="button" onClick={handleClick} />
      <input type="button" value="/" className="button" onClick={handleClick} />
      <input type="button" value="%" className="button" onClick={handleClick} />
      <input type="button" value="." className="button" onClick={handleClick} />
      <div className="HandleButton">
        <input
        type="button"
        value="Clear"
        className="button button1"
        onClick={ClearHandle}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={Calculate}
      />
      <input type="button"
      value="x"
      className="button button1"
      onClick={crossHandle} 
      />
      </div>

    </div>
  );
}

export default Button;
