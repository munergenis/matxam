interface Props {
  logout: () => void;
}
const LogoutButton = ({ logout }: Props) => {
  return (
    <button
      className="avatar"
      onClick={logout}
    >
      Logout
    </button>
  );
};
export default LogoutButton;
