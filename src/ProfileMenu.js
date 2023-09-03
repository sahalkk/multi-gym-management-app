import { useAuth0 } from "@auth0/auth0-react";

function ProfileMenu({ isOpen, onClose }) {
  const { logout } = useAuth0();
  return (
    <div
      className={`absolute right-1 mt-2  ${isOpen ? "flex" : "hidden"}`}
      onClick={onClose}
    >
      <div className="flex w-48 h-14 bg-white">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
export default ProfileMenu;
