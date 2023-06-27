import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container, Row, Col } from "react-bootstrap";
import "../src/components/SideMenu.css";

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
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
          <Col xs={12} md={10} lg={10} className="px-4">
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
