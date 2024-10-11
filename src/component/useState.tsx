import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(10);
  const handleIncrease = () => {
    setCounter(counter + 4);
  };

  return (
    <>
      <button onClick={() => handleIncrease()}>Increase</button>
      <div>{counter}</div>
    </>
  );
};

export default UseState;
