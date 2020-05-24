import React from "react";

const Button = props => {
  return (
    <React.Fragment>
      <input
        onClick={props.onSubmit}
        className="Button"
        type="submit"
        value="Submit"
        disabled={props.disabled}
      />
    </React.Fragment>
  );
};

export default Button;