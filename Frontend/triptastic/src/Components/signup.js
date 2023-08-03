import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
function Signup() {
  const history = useNavigate();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = async (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ans = emailRegex.test(email);
    if (ans === false) {
      return false;
    }
    var data = { email: email };
    const response = await fetch("http://localhost:5000/emailvalidate", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var status = response.status;
    if (status === 400) {
      return "Not";
    }
    return true;
  };

  var data = {};
  const handleRegister = async () => {
    data = {
      name: username,
      password: password,
      email: email,
    };

    // validate Email;
    const e1 = await validateEmail(email);
    console.log(e1, "valid emal");
    if (e1 === "Not") {
      alert("your email is not deliverable ");
      return 1;
    }
    if (e1 === false) {
      alert("please write proper email format ");
      return 1;
    }

     var flag = insert_data(data);
     history("/");
    if (flag === 1) {
      console.log("data is inserted");
      history("/");
    } else 
    {
      
    }
  };
  const insert_data = async (data) => {
    const response = await fetch("http://localhost:5000/insert", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log(res)
    if (res.status === 200) {
      return 1;
    }
    return 0;
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleusernameChange = (event) => {
    setUser(event.target.value);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Signup</LoginTitle>

        <div className="inputs">
          <LoginLabel htmlFor="username">Name:</LoginLabel>
          <LoginInput
            type="text"
            id="name"
            value={username}
            onChange={handleusernameChange}
            required
          />
        </div>
        <div className="inputs">
          <LoginLabel htmlFor="email">Email:</LoginLabel>
          <LoginInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="inputs">
          <LoginLabel htmlFor="password">Password:</LoginLabel>
          <LoginInput
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <LoginButton onClick={handleRegister} type="submit">Signup</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const LoginLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6192f7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
export default Signup;
