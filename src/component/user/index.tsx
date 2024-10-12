import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default User;
