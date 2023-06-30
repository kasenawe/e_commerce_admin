import "./Login.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tooltip } from "antd";

function Login() {
  const admin = useSelector((state) => state.admin);
  const [usernameValue, setUsernameValue] = useState("admin");
  const [passwordValue, setPasswordValue] = useState("admin");
  const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_DOMAIN}adm/login`,
        data: {
          username: usernameValue,
          password: passwordValue,
        },
      });

      if (response.data.error) {
        // Mostrar error de credenciales inválidas
        setError(response.data.error);
      } else {
        dispatch(setToken(response.data));

        navigate("/");
      }
    } catch (error) {
      setError("Error en el servidor");
    }
  }

  return (
    <div className="w-100 container-form">
      <div className="form-container">
        {error && (
          <p className="text-center font-quicksand color-red">{error}</p>
        )}
        <p className="form-title">Login</p>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="admin"
              value={usernameValue}
              onChange={(event) => setUsernameValue(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="admin"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
            />
            <div className="forgot">
              <Tooltip placement="left" title="Out of the scope of the proyect">
                Forgot Password?
              </Tooltip>
            </div>
          </div>
          <button className="sign" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
