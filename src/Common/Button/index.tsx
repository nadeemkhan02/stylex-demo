import React from "react";
import * as stylex from "@stylexjs/stylex";

interface ButtonProps {
  btnTxt: string,
  variant?: "primary" | "danger",
  customStyle?: stylex.StyleXStyles<{ margin?: string }>
}

const btnStyle = stylex.create({
  base: {
    fontSize: "20px",
    padding: "10px"
  },
  primary: {
    background: "blue"
  },
  danger: {
    background: "red"
  }
})

function index({ btnTxt, variant = "primary" }: ButtonProps) {
  return (
    <div>
      <button {...stylex.props(btnStyle.base, btnStyle[variant])}>{btnTxt}</button>
    </div>
  );
}

export default index;
