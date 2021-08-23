import React, { useState } from "react";


const SingleColour = ({rgb, weight, index}) => {

    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",");
    console.log(bcg);
    const style = {
        backgroundColor: `rgb(${bcg})` 
    }

    return <article className="color" style={style}></article>
}


export default SingleColour;