import React, { Component } from "react";
import classes from "./Wrapper.module.css";
import Counter from "./Counter";
import Card from "../card/Card";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0,
      isStart: false,
      toggle: false,
    };
    this.input = React.createRef();
  }

  inputHandler = () => {
    this.setState((prevState) => {
      return {
        inputValue: this.input.current.value,
        isStart: prevState.isStart,
        toggle: prevState.toggle,
      };
    });
  };

  startButtonHandler = () => {
    if (this.state.isStart === true) {
      this.setState((prevState) => {
        return {
          inputValue: 0,
          isStart: prevState.isStart,
          toggle: !prevState.toggle,
        };
      });
    }
    this.setState((prevState) => {
      return {
        inputValue: prevState.inputValue,
        isStart: true,
        toggle: prevState.toggle,
      };
    });
  };

  stopButtonHandler = () => {
    this.setState((prevState) => {
      return {
        inputValue: prevState.inputValue,
        isStart: false,
        toggle: prevState.toggle,
      };
    });
  };

  deleteButtonHandler = () => {
    this.setState((prevState) => {
      return {
        inputValue: 0,
        isStart: false,
        toggle: !prevState.toggle,
      };
    });
  };

  render() {
    return (
      <Card>
        <input
          className={classes.input}
          type="number"
          defaultValue={0}
          ref={this.input}
          onBlur={this.inputHandler}
        />
        <Counter
          value={this.state.inputValue}
          isStart={this.state.isStart}
          toggle={this.state.toggle}
        />
        <div className={classes.placement}>
          <button
            className={classes.button}
            type="button"
            onClick={this.startButtonHandler}
          >
            Start
          </button>

          <button
            className={classes.button}
            type="button"
            onClick={this.stopButtonHandler}
          >
            Stop
          </button>

          <button
            className={classes.button}
            type="button"
            onClick={this.deleteButtonHandler}
          >
            Delete
          </button>
        </div>
      </Card>
    );
  }
}

export default Wrapper;
