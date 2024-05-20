import { NavLink } from "react-router-dom";
import "./main.css";
function Main() {
  return (
    <nav className="nav">
      <h1> All Components</h1>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Users" activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/Settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Main;
