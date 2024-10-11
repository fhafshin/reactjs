import { useState } from "react";
interface Props {
  defaultValue: number;
}
const Index = (props: Props) => {
  const [counter, setCounter] = useState(props.defaultValue);

  const handlePlusClick = () => {
    if (counter < 10) setCounter(counter + 1);
  };
  const handleMinesClick = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <div>
        {counter === 0 ? null : <button onClick={handleMinesClick}>-</button>}
        <span style={{ color: "red" }}>{counter === 0 ? "zero" : counter}</span>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </>
  );
};

export default Index;
