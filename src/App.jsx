import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container, Row, Col } from "react-bootstrap";
import "../src/components/SideMenu.css";
import { useSelector } from "react-redux";

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
import Sidemenu from "./components/Sidemenu";

import "./App.css";

function App() {
  const admin = useSelector((state) => state.admin);

  return (
    <div className="general-padding">
      <NavbarComponent />
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
  );
}

export default App;
