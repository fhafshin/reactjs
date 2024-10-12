import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">خانه</NavLink>
      <br />
      <NavLink to="/about-us">درباره ما</NavLink>
    </div>
  );
};

export default Navbar;
