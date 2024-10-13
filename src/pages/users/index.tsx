import { useEffect, useState } from "react";
import axios from "axios";
interface IUser {
  name: string;
  family: string;
}
const Users = () => {
  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <div>
      {users.map((item) => {
        return (
          <div>
            <span>{item.name}</span>
            <br />
            <br />
            <br />
            <span>{item.family}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
