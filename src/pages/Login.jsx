import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Login.css";

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="border">
            <form
              className="container m-5 col-10"
              method="post"
              action="/login"
            >
              <h2>Login</h2>
              <p>Welcome to Kairos</p>
              <div className="row mt-5 g-3 mb-3">
                <div className="col-12">
                  <label htmlFor="username" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label"></label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
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
