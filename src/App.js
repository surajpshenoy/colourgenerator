import React, { useState } from "react"
import Values from "values.js";
import SingleColour from "./SingleColour";


function App() {

const [color, setColor] = useState();
const [error, setError] = useState(false);
const [list, setList] = useState([]);

const handleSubmit = (event) => {
  event.preventDefault();
  try {
    let colors = new Values(color).all(10);
    setList(colors);
  } catch (error) {
    console.log(error);
    setError(true);
  }
};

return(
  <div>
    <section className="container">
         <h3>color generator</h3>
         <form onSubmit={handleSubmit}>
           <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">

      {list.map((color, index) => {
        //console.log(color)
        return <SingleColour key={index} {...color} index={index} hexColor = {color.hex}/>
      })}
        
      </section>
  </div>
)
}


export default App;











