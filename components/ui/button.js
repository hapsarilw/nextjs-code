import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      // onClick -> use our own button just as the built in button
      <button className={classes.btn} onClick={props.click}>
        {props.children}
      </button>
    );
  }
}

export default Button;
