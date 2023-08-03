import React, { useState ,useContext} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { UserContext } from "../Context/usercontext";
function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const {user,setUser} = useContext(UserContext);
  const history = useNavigate();
  const handleEmailChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin=async ()=>{
   
    const data={
           username:username,
           password:password,
    }
    console.log(data);
    var status;

  await fetch(
    'http://localhost:5000/login', {
       method: "post",
       body: JSON.stringify(data),
       headers: {
           'Content-Type': 'application/json'
       }
   }).then((rs)=>{
    console.log(rs.status);
    status=rs.status;
   })


   if(status===200)
   {
      //  history("/");
      setUser(username);
      history('/');
   }
   else{
      alert("invalid user name or password");
   }

}

  return (
    <LoginWrapper>
      <LoginForm >
        <LoginTitle>Login</LoginTitle>
        <div className="inputs">
          <LoginLabel htmlFor="email">Username:</LoginLabel>
          <LoginInput
            type="text"
            id="username"
            value={username}
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
        <LoginButton   onClick={handleLogin} type="Button">Login</LoginButton>
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
export default Login
