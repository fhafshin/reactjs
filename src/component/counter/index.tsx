import styles from "./style.module.css";
import { useState } from "react";
interface Props {
  defaultValue: number;
}
const Counter = (props: Props) => {
  const getStyle = () => {
    return counter > 4
      ? styles.container_wrapper
      : styles.container_wrapper_red;




  };
  const [counter, setCounter] = useState(props.defaultValue);
  const handlePlusClick = () => {
    if (counter < 10) setCounter(counter + 1);
  };
  const handleMinesClick = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div className={styles.container}>
      <div className={getStyle()}>
        {counter === 0 ? null : <button onClick={handleMinesClick}>-</button>}
        <span style={{ color: "red" }}>{counter === 0 ? "zero" : counter}



        </span>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
};

export default Counter;
