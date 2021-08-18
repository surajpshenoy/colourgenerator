import React, { useState } from "react";
import Values from "values.js"


function App() {
  const [color, setColor] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
    console.log(colors);
    }
    catch(error) {
      console.log(error);
      setError(true)
    }
    
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className = {`${error? 'error' : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors"></section>
    </>
  );
}

export default App;
