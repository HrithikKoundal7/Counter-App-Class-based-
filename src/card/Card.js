import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <div className={classes.card}>{props.children}</div>
      <div>
        <ul className={classes.droplet}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
