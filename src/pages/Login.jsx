import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
