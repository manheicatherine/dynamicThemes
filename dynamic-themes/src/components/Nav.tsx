import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav >
      <Link to="/greyorangetheme" className="selectBox selectGreyOrange" />
      <Link to="/tealtheme" className="selectBox selectTeal" />
      <Link to="/yellowtheme" className="selectBox selectYellow" />
      <Link to="/redtheme" className="selectBox selectRed" />
      <Link to="/purpletheme" className="selectBox selectPurple" />
    </nav>
  );
};
