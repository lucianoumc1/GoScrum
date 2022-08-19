import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const { isLogued } = useSelector((state) => state.authReducer);

  if (!isLogued) {
    return <Navigate to="/GoScrum/login" />;
  }
  return children;
}
