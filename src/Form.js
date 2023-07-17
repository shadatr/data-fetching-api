import React from "react";
import Button from "./Button";

const Form = ({ item, setItems }) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <Button setItems={setItems} text="users" />
      <Button setItems={setItems} text="posts" />
      <Button setItems={setItems} text="comments" />
    </form>
  );
};

export default Form;
