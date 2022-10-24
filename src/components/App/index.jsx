import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import ProtectedRoute from "../ProtectedRoute";
import Header from "../Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
