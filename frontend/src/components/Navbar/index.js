import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Application Tracker
        </Typography>
        {isAuthenticated ? (
          <Button
            color="inherit"
            href="/login"
            onClick={() => logoutWithRedirect()}
          >
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            href="/login"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        )}
        {isAuthenticated && (
          <IconButton size="small" href="/profile">
            <Avatar src={user.picture} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
