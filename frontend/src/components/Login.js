import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mynotebook-backend.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const res = await response.json();
    console.log(res);
    if (res.success) {
      //Save the token in localstorage and Redirect
      localStorage.setItem("Token", res.authToken);
      props.showAlert("Login Successfull..!!", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credential..!!", "danger");
    }
  };

  const onChange = (e) => {
    //...credential is a spread operator used to create copy of the existing credential object
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="m-auto pt-4 rounded-4"
      style={{ maxWidth: "380px", maxHeight: "auto", backgroundColor: "#b9b2b2" }}
    >
      <h2 className="mb-1 text-center">Login to Notebook</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="my-4 mx-2">
          <label htmlFor="email" className="form-label">
            <h5>Email address</h5>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credential.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="my-3 mx-2">
          <label htmlFor="password" className="form-label">
            <h5>Password</h5>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credential.password}
            onChange={onChange}
/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark my-3  m-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
