import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import NavbarComponent from "./components/NavbarComponent";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Lines from "./pages/Lines";
import Brands from "./pages/Brands";
import Colors from "./pages/Colors";
import Orders from "./pages/Orders";
import Admins from "./pages/Admins";
import Users from "./pages/Users";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid app">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/products" element={<Products />} />
            <Route path="/lines" element={<Lines />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
