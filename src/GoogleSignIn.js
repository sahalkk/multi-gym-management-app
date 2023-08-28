import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function GoogleSignIn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      // Navigate to the profile page if already authenticated
      navigate("/Dashboard");
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-white text-black py-4 px-4 rounded w-full border-2"
    >
      Continue with Google
    </button>
  );
}

export default GoogleSignIn;
