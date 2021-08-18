import React, { useState } from "react";
//import Values from "value.js";

function App() {
  const [color, setColor] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors"></section>
    </>
  );
}

export default App;
