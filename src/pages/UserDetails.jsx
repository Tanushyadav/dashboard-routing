import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  return (
    <main style={{ padding: 20 }}>
      <h1>User Details</h1>
      <h2>User ID: {id}</h2>

      <button onClick={() => navigate(-1)} style={{ marginTop: 15 }}>
        Go Back
      </button>
    </main>
  );
}
