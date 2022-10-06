import React from "react";
import Link from "next/link";
const Button = (props) => {
  return (
    <Link href={props.link}>
      <button
        color={props.color}
        backgroundColor={props.background}
        font={props.font}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
