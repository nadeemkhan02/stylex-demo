import "./App.css";
import * as stylex from "@stylexjs/stylex";
import Button from "./Common/Button";

const styles = stylex.create({
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    color: "blue",
  },
});

const App = () => {
  return (
    <>
      <h1 {...stylex.props(styles.main)}>
        Introduction to StyleX: Meta's Solution for Styling in React
      </h1>
      <div {...stylex.props(styles.btnContainer)}>
        <Button btnTxt={"cick me"} variant="danger" />
        <Button btnTxt={"cick me"} variant="primary" />
      </div>
    </>
  );
};

export default App;
