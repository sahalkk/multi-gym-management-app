import { useAuth0 } from "@auth0/auth0-react";
function GoogleSignIn() {
  const { loginWithRedirect } = useAuth0();
  const handleGoogleSignIn = () => {
    loginWithRedirect();
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
