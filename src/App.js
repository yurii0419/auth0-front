import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./dashboard";

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Auth0 App</h1>
      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Login</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button
            onClick={() => logout({ returnTo: "https://localhost:5000" })}
          >
            Logout
          </button>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default App;
