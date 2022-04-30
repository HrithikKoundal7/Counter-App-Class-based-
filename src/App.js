import { Fragment } from "react";
import classes from "./App.module.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Fragment>
      <Wrapper />
      <ul className={classes.droplet}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Fragment>
  );
}

export default App;
