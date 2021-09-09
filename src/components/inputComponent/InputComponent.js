import React from "react";
import "./InputComponent.css";

const validatePlaceholder = (title) => {
  return title === "Bill Amount"
    ? "Enter the bill amount"
    : "Enter the cash given by customer";
};

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  onInputHandler = (event) => {
    this.setState(
      {
        inputText: event.target.value,
      },
      () => {
        const { inputText } = this.state;
        const { callbackHandler } = this.props;
        callbackHandler(inputText);
      }
    );
  };

  render() {
    const { inputTitle } = this.props;
    return (
      <div className="input-wrapper">
        <div className="input-header-wrapper">
          <p className="input-header">{inputTitle}</p>
        </div>
        <div className="input-box-wrapper">
          <input
            className="input-box"
            placeholder={validatePlaceholder(inputTitle)}
            onChange={this.onInputHandler}
          />
        </div>
      </div>
    );
  }
}

export default InputComponent;
