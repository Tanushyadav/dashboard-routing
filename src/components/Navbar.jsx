import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "20px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
  });

  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/user/10" style={linkStyle}>User 10</NavLink>
    </nav>
  );
}
