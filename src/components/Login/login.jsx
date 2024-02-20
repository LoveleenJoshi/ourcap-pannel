import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const [data, setData] = useState({ username: 'loveleen', password: 'love@6861' });
  const [userVerification, setUserVerification] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleUserDetails(identifier, newValue) {
    setData((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [identifier]: newValue,
      };
    });
  }

  function handleUserVerification() {
    if (data.username === data.enteredUsername) {
      setUserVerification((prev) => ({ ...prev, username: "Username is verified" }));
    } else {
      setUserVerification((prev) => ({ ...prev, username: "Username is not verified" }));
    }
  }

  function handlePasswordVerification() {
    if (data.password === data.enteredPassword) {
      setUserVerification((prev) => ({ ...prev, password: "Password is verified" }));
    } else {
      setUserVerification((prev) => ({ ...prev, password: <Link to="/forgetPassword">Forget Password</Link> }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    // Here you can add logic for submitting the form or navigating to another page
    // Replace "/dashboard" with the actual path you want to navigate to
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={handleSubmit} className="rounded border border-2 border-secondary m-3 p-3" style={{ boxShadow: "2px solid gray" }}>
          <dl>
            <h4>
              <span className="bi bi-person-fill mt-2"></span>Registered User
            </h4>
            <dt>UserName</dt>
            <dd>
              <input
                type="text"
                onBlur={handleUserVerification}
                onChange={(e) => handleUserDetails("enteredUsername", e.target.value)}
                className="form-control"
              />
            </dd>
            <dd>{userVerification.username}</dd>
            <dt>Password</dt>
            <dd>
              <input
                type="password"
                onBlur={handlePasswordVerification}
                onChange={(e) => handleUserDetails("enteredPassword", e.target.value)}
                className="form-control"
              />
            </dd>
            <dd>{userVerification.password}</dd>
          </dl>
          <button type="submit" className="btn btn-secondary w-100 mb-3">
            Login
          </button>
          <Link to="/Register">New User? Register</Link>
          <p>  <Link to="/forgetPassword">Forget Password?</Link></p>
        </form>
      </div>
    </div>
  );
}
