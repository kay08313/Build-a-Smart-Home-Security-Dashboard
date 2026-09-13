import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RequireAuth({ children }) {
  const token = useContext(AuthContext).token;

  if (!token) {
    console.log("token=null,back to login page");
    return <Navigate to="/" replace />;
  }
  return children;
}
