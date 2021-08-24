import React, { useState } from "react";


const SingleColour = ({rgb, weight, index, hexValue}) => {

    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",");
    console.log(bcg);
    const style = {
        backgroundColor: `rgb(${bcg})` 
    }

    return <article className={`color ${index > 10 && 'color-light'} `} style={style}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hexValue}</p>
    </article>
}


export default SingleColour;