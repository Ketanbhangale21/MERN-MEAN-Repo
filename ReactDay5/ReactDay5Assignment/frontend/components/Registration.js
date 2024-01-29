import axios from "axios";
import React, { useState } from "react";
import "./login.css";

// import { useHistory } from "react-router-dom"; // Assuming you're using React Router for navigation

function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [fieldsEmpty, setFieldsEmpty] = useState("");
  const [isDataRegistered, setisDataRegistered] = useState({});
  //   const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [userData, setUserData] = useState([]);
  const [emailid, setEmail] = useState("");
  //   const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !repassword) {
      setFieldsEmpty("Email and Password are required.");
      return;
    }
    if (!isEmailValid(username)) {
      setFieldsEmpty("Invalid Email Id");
      return;
    }

    let url = "http://localhost:3005/api/users";
    axios.get(url).then((response) => {
      setUserData(response.data);
    });

    setisDataRegistered(
      userData.find((user) => user.emailid === username.toLowerCase())
    );
    // console.log(isDataRegistered);

    if (isDataRegistered.emailid === username) {
      setFieldsEmpty("This Email id is already registered !!");
      return;
    }

    const isValidPassword = isPasswordValid(password);
    if (!isValidPassword.valid) {
      setFieldsEmpty(isValidPassword.error);
      return;
    }

    if (password !== repassword) {
      setFieldsEmpty("Passwords should match");
      return;
    }
    addNewUser(username, password);
  };

  const isEmailValid = (username) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(username);
  };

  const isPasswordValid = (password) => {
    if (password.length < 8) {
      return {
        valid: false,
        error: "Password should contain at least 8 characters",
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        valid: false,
        error: "Password should contain at least 1 uppercase letter",
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        valid: false,
        error: "Password should contain at least 1 lowercase letter",
      };
    }
    if (!/\d/.test(password)) {
      return {
        valid: false,
        error: "Password should contain at least 1 digit",
      };
    }
    if (!/[\W_]/.test(password)) {
      return {
        valid: false,
        error: "Password should contain at least 1 special character",
      };
    }
    return { valid: true };
  };

  // Perform registration logic here

  function addNewUser(username, password) {
    const dataObj = { username, password };
    let url = "http://localhost:3005/api/register/user";
    axios.post(url, dataObj).then((resData) => {
      alert("New User registration successful");
      //   history.push("/"); // Redirect to login page after successful registration
    });
  }

  return (
    <div className="login-container">
      <div className="inner-conatiner">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email-ID</label>
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
          <div className="form-group">
            <label htmlFor="re-password">Retype Password</label>
            <input
              type="password"
              id="re-password"
              name="re-password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              autoComplete="off"
            />
          </div>

          <button type="submit">Register</button>
          <p className="mt-1" style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <a className="mt-1" href="/">
              Login Here
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
export default RegisterComponent;
