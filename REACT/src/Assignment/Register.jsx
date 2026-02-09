import { useState } from "react";

const Register = ({ setPage }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const register = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful");
    setPage("login");
  };

  return (
    <div
      style={{
        width: "360px",
        padding: "30px",
        borderRadius: "18px",
        background: "#111827",
        color: "#f9fafb",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}
    >
      <h2>Register</h2>

      <input placeholder="Name" style={inputStyle}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" style={inputStyle}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" style={inputStyle}
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button style={buttonStyle} onClick={register}>
        Register
      </button>

      <p style={linkStyle} onClick={() => setPage("login")}>
        Already registered? Login
      </p>
    </div>
  );
};

export default Register;
