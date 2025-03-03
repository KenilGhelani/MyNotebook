// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = (props) => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   let navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (user.password!==user.cpassword) {
//       props.showAlert("Your password & Confirm password is not same", "danger")
//     }
//     else{
      
//       const response = await fetch("https://mynotebook-backend.vercel.app/api/auth/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*"
//       },
//       body: JSON.stringify({
//         name: user.name,
//         email: user.email,
//         password: user.password
//       }),
//     });
//     const res = await response.json({
//     });
//     console.log(res);
//     if (res.success) {
      
//       localStorage.setItem('Token', res.authToken);
//       navigate("/");
//       props.showAlert('Signup Successfull', 'success');
//     }
//     else{
//       props.showAlert('User already exists', 'danger');
//     }
//     }
//     }
    

//   const onChange = (e) => {
//     //...user is a spread operator used to create copy of the existing user object
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="px-2 my-2" style={{maxWidth: "auto", position: "relative", top: "60px"}}>
//     <div className="mx-auto pt-1 rounded-4" style={{maxWidth: "400px", maxHeight: "auto" , backgroundColor: "#b9b2b2"}}>
//       <h2 className="my-2 text-center">SignUp</h2>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div className="my-4 mx-2">
//           <label htmlFor="name" className="form-label">
//           <h5>Name</h5>
//           </label>
//           <input
//             type="name"
//             className="form-control mb-4"
//             id="name"
//             name="name"
//             aria-describedby="emailHelp"
//             onChange={onChange}
//             required
//             // value={user.name}
//           />
//           <label htmlFor="email" className="form-label">
//           <h5>Email Address</h5>
//           </label>
//           <input
//             type="email"
//             className="form-control mb-4"
//             id="email"
//             name="email"
//             aria-describedby="emailHelp"
//             onChange={onChange}
//             required
//             // value={user.email}
//           />
//         </div>
//         <div className="mb-3 mx-2">
//           <label htmlFor="password" className="form-label">
//           <h5>Password</h5>
//           </label>
//           <input
//             type="password"
//             className="form-control mb-4"
//             id="password"
//             name="password"
//             onChange={onChange}
//             minLength={5}
//             required
//             value={user.password}
//           />
//         </div>
//         <div className="mb-2 mx-2">
//           <label htmlFor="cpassword" className="form-label">
//           <h5>Confirm Password</h5>
//           </label>
//           <input
//             type="password"
//             className="form-control mb-4"
//             id="cpassword"
//             name="cpassword"
//             onChange={onChange}
//             minLength={5}
//             required
//             value={user.cpassword}
//           />
//         </div>
//         <div className="text-center">
//           <button type="submit" className="btn btn-dark  m-auto mb-4">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "", // Added cpassword to the state
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.cpassword) {
      props.showAlert("Your password and Confirm password do not match", "danger");
    } else {
      try {
        const response = await fetch("https://mynotebook-backend.vercel.app/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
          }),
        });

        const res = await response.json();
        console.log(res);

        if (res.success) {
          localStorage.setItem('Token', res.authToken);
          navigate("/");
          props.showAlert('Signup Successful', 'success');
        } else {
          props.showAlert('User already exists', 'danger');
        }
      } catch (error) {
        console.error("Error occurred during signup:", error);
        props.showAlert('Something went wrong. Please try again.', 'danger');
      }
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-2 my-2" style={{ maxWidth: "auto", position: "relative", top: "60px" }}>
      <div className="mx-auto pt-1 rounded-4" style={{ maxWidth: "400px", maxHeight: "auto", backgroundColor: "#b9b2b2" }}>
        <h2 className="my-2 text-center">SignUp</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="my-4 mx-2">
            <label htmlFor="name" className="form-label">
              <h5>Name</h5>
            </label>
            <input
              type="name"
              className="form-control mb-4"
              id="name"
              name="name"
              onChange={onChange}
              required
              value={user.name} // Make sure value is bound to the state
            />
            <label htmlFor="email" className="form-label">
              <h5>Email Address</h5>
            </label>
            <input
              type="email"
              className="form-control mb-4"
              id="email"
              name="email"
              onChange={onChange}
              required
              value={user.email} // Bind value to state
            />
          </div>
          <div className="mb-3 mx-2">
            <label htmlFor="password" className="form-label">
              <h5>Password</h5>
            </label>
            <input
              type="password"
              className="form-control mb-4"
              id="password"
              name="password"
              onChange={onChange}
              minLength={5}
              required
              value={user.password} // Bind value to state
            />
          </div>
          <div className="mb-2 mx-2">
            <label htmlFor="cpassword" className="form-label">
              <h5>Confirm Password</h5>
            </label>
            <input
              type="password"
              className="form-control mb-4"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              minLength={5}
              required
              value={user.cpassword} // Bind value to state
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark m-auto mb-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
