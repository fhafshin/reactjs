import { useState } from "react";
import axios from "axios";

const SendData = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const handleClick = () => {
    const str = `http://localhost:3001`;
    const data = { data: name };
    console.log(str, data);
    axios.post(str, data).then((res) => {
      setResponse(res.data);
    });
  };
  return (
    <>
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={handleClick}>Click</button>
      </div>
      <div>{response}</div>
    </>
  );
};

export default SendData;
