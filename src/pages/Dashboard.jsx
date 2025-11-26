import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <nav style={{ marginBottom: 20 }}>
        <Link to="profile" style={{ marginRight: 15 }}>Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> 
    </main>
  );
}
