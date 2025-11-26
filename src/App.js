import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard + Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/user/:id" element={<UserDetails />} />

        {/* 404 */}
        <Route path="*" element={<h1 style={{ padding: 20 }}>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
