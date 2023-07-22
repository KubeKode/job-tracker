import { Auth0Provider } from "@auth0/auth0-react";
const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.AUTH0_DOMAIN;
  const clientId = process.env.AUTH0_CLIENT_ID;
  console.log(domain)
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;
