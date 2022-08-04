import { Routes, Route } from "react-router-dom";

import Header from "../Header";
import Login from "../views/Login";
import Register from "../views/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
