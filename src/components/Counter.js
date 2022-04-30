import { Component } from "react";
import classes from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, sec: 0 };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.value !== this.props.value ||
      prevProps.toggle !== this.props.toggle
    ) {
      this.setState({ counter: +this.props.value, sec: 0 });
    }
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.isStart !== false) {
        let value = this.state.counter + 1;
        this.setState((prevState) => {
          return { counter: value, sec: prevState.sec };
        });
      }
    }, 2000);

    this.second = setInterval(() => {
      if (this.props.isStart !== false) {
        let value;
        if (this.state.sec !== 10) {
          value = this.state.sec + 1;
        } else {
          value = 0;
        }
        this.setState((prevState) => {
          return { counter: prevState.counter, sec: value };
        });
      }
    }, 180);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.second);
  }

  render() {
    return (
      <div>
        <div className={classes.column_1}>
          <div
            className={
              this.props.isStart
                ? classes.counterAnimation_sec
                : classes.counter_sec
            }
          >
            {this.state.sec}
          </div>
        </div>
        <div className={classes.counter}>{this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
