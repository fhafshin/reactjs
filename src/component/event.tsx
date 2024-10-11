import { useState } from "react";

const Event = () => {
  const [input, setInput] = useState("");
  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setInput(event?.target?.value);
  };
  return (
    <div>
      <input type="text" onKeyDown={handleInput}></input>
    </div>
  );
};
export default Event;
