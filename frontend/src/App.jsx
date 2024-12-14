import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MyHeader from "./components/MyHeader";
function App() {
  return (
    <div className="m-0 p-0">
      <MyHeader />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
