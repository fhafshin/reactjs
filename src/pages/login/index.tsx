import axios from "axios";
import { useEffect, useRef, useState } from "react";
interface IUser {
  username: string;
  password: string;
}
const Login = () => {
  const counter = useRef(0);

  const element = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const data: IUser = { username: username, password: password };
    console.log(data);
    axios.post("https://freefakeapi.io/authapi/login", data).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    counter.current += 1;
    console.log("ref " + counter.current);
  });
  useEffect(() => {
    console.log("LL:" + element.current.clientHeight);
  }, []);
  return (
    <>
      <div>
        <input
          ref={element}
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
