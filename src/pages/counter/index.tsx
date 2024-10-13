import { useMemo, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(50);
  const expensiveCal = useMemo(() => {
    return Math.pow(counter * 2100, 5);
  }, [counter]);
  return <div>{expensiveCal}</div>;
};

export default Counter;
