import { Routes, Route } from "react-router-dom";

import Header from "../Header";
import Login from "../views/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
