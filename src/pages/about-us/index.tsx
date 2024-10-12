import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user/25");
  };

  return (
    <>
      <div>about me</div>
      <div>
        <button onClick={handleClick}>return to User</button>
      </div>
    </>
  );
};
export default AboutUs;
