import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.profile) {
    return <Navigate to="/auth" replace state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
