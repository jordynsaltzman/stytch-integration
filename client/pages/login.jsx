import React, { useState } from "react";
import Axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();

  const handleLogin = () => {
    Axios.post("http://localhost:3001/login", { email: email }).then(() =>
      console.log("ok")
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Sign up</h1>
      </div>
      <div>
        <p>Enter your email to signup</p>
        <input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
