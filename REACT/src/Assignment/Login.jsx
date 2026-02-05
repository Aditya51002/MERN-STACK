import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login=({})=>{
    const[email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    

    const handleLogin=()=>{
        e.preventDefault();
        const storedUser=JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate("/dashboard")

        }
        else{
            alert("invalid credential");
        }
    };

    

    return(
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}

export default Login;