import React from "react";

const Button = ({ setItems, text }) => {
  return (
    <div>
      <button onClick={() => setItems(text)}>{text}</button>
    </div>
  );
};

export default Button;
