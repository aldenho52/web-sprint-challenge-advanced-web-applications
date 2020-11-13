import React, { useState } from "react";
import axios from 'axios';

const initialLoginInfo = {
  username: '',
  password: ''
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginInfo, setLoginInfo] = useState(initialLoginInfo)

  const handleChange = e => {
    setLoginInfo({
        ...loginInfo,
        [e.target.name]: e.target.value
      });
  };

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', loginInfo)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      props.history.push("/protected");
      props.setIsLoggedIn(true);
    })
    .catch( err => {
      console.log(err)
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={loginInfo.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
    </>
  );
};

export default Login;
