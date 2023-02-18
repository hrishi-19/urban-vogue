import Cart from "./pages/Cart";
import HomePage from "./pages/homePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Route, Routes,Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user=useSelector(state=>state.user.currentuser)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={user?<Navigate to="/"/>:<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/products/:cat" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success/>} />
    </Routes>

  )
};

export default App;