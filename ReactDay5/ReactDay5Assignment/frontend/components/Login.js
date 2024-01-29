import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom"; // Assuming you're using React Router for navigation

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsEmpty, setFieldsEmpty] = useState("");
  // const history = useHistory();
  const [userData, setUserData] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setFieldsEmpty("Email or Password cannot be Empty !!");
      return;
    }
    if (!isEmailValid(username)) {
      setFieldsEmpty("Invalid Email Id");
      return;
    }
    login(username, password);
  };

  const isEmailValid = (username) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(username);
  };

  const login = (username, password) => {
    setFieldsEmpty("");
    // Make API call to fetch user data
    let url = "http://localhost:3005/api/users";
    axios
      .get(url)
      .then((response) => {
        setUserData(response.data);

        console.log(userData);
        const isDataRegistered = userData.find(
          (user) => user.emailid === username.toLowerCase()
        );
        console.log(isDataRegistered);
        if (isDataRegistered.emailid !== username) {
          setFieldsEmpty("Unregistered Email Id");
          return;
        } else {
          if (isDataRegistered.password === password) {
            if (isDataRegistered.emailid === "admin@example.com") {
              alert("Logged In Success \n Welcome Admin");
            }
            // history.push("/students");
            // alert("Logged In Success");
            const queryString = location.search; // returns the query string from the current url
            // let strReturnUrl  =  new URLSearchParams(search).get('key');
            let strReturnUrl = new URLSearchParams(queryString).get(
              "returnUrl"
            );

            if (strReturnUrl == null) {
              strReturnUrl = "/";
            }
            // In real-time apps, we will get the token from the server
            // JWT token is the popular token generation library
            let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
            sessionStorage.setItem("user-token", token);
            // navigate("/Depts");
            navigate(strReturnUrl);
          } else {
            setFieldsEmpty("Incorrect Password");
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="login-container">
      <div className="inner-conatiner">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email-Id</label>
            <input
              type="email"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>

          <button type="submit">Login</button>
          <p className="mt-1 text-center">
            Do not have an account?{" "}
            <a className="mt-1" href="/registration">
              Register Here
            </a>
          </p>

          {fieldsEmpty && (
            <div className="error-message text-center text-danger">
              {fieldsEmpty}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
