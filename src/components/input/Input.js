import React from "react";

function errorMessage(errorMsg) {
  return <div className="Input__error-message">{errorMsg}</div>;
}

const Input = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        name = {props.name}
        placeholder= { props.placeholder }
        onChange= { props.handleChange }
      />
      {props.error && errorMessage(props.errorMsg)}
    </React.Fragment>
  );
};

export default Input;
