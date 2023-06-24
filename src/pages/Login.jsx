import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/api/admin/login",
      data: {
        username: usernameValue,
        password: passwordValue,
      },
    });
    dispatch(setToken(response.data));
    navigate("/");
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className="border">
            <form
              className="container m-5 col-10"
              method="post"
              action="/api/admin/login"
              onSubmit={handleSubmit}
            >
              <h2>Login</h2>
              <p>Welcome to Kairos</p>
              <div className="row mt-5 g-3 mb-3">
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username"
                    value={usernameValue}
                    onChange={(event) => setUsernameValue(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                  />
                </div>

                <button type="submit" className="btn rounded-pill text-white">
                  Login
                </button>
                <p>
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
