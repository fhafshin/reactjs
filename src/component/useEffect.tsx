import { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    console.log("use effect start....");
  }, []);
  useEffect(() => {
    console.log("use effect event change");
  });
  useEffect(() => {
    return () => {
      console.log("end....");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default UseEffect;
