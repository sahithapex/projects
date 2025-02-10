import { Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return(
    <> 
      <div className="bg-slate-900 fixed w-full z-10">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;