import React, { useState } from "react";

const SingleColour = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  console.log(bcg);
  const style = {
    backgroundColor: `rgb(${bcg})`,
  };

  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"} `}
      style={style}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColour;
