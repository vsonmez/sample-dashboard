import React from "react";
import http from "../http";
import LoginResponse from "../auth/models/login-response.type";
import { useNavigate } from "react-router-dom";
import BaseInputComponent from "../shared-components/inputs/BaseInput.component";
import ButtonComponent from "../shared-components/buttons/Button.component";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("kminchelle");
  const [password, setPassword] = React.useState("0lelplR");
  const accessToken = localStorage.getItem("accessToken");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http
      .post<LoginResponse>("auth/login", { username, password })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div aria-roledescription="login" className="h-full flex flex-col gap-5 justify-center items-center bg-gray-50">
      <img src="https://img.logoipsum.com/262.svg" alt="Logo" />
      <h1 className="text-3xl font-medium">Sign in to your account</h1>
      <div className="w-full max-w-96 border rounded p-5 shadow-sm bg-white">
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-5">
          <BaseInputComponent
            label="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <BaseInputComponent
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonComponent text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(LoginPage);
