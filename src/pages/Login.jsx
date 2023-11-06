import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/contact");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Login Page
          </h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
