import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {isAuthenticated ? (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};
export default Profile;