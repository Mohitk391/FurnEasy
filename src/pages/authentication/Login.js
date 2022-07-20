import { NavBar } from "../../components/NavBar/NavBar"
import "./authentication.css";
import { Link } from "react-router-dom";
import {useState } from "react";
import Axios from "axios";

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [user, setUser] = useState({ email: "", password: ""});

    const loginUser  = async () => {
        try {
            const response = await Axios.post("/api/auth/login", {
            email: user.email,
            password: user.password,
            });
            console.log(response);
            const token = response.data.encodedToken;
            localStorage.setItem("token", token);
        }
        catch(error){
            console.error("error occurred" + error);
        }
    }

    return (
        <div className="page-layout">
        <NavBar />
        <main className="authenticate-main flex flex-center">
            <div className="login-body">
                <div className="title">Login</div>
                <div className="input-field">
                    <label className="label" htmlFor="email-inp">Email</label>
                    <input type="email" placeholder="abc@example.com" id="email-inp" onChange={(e)=>setUser({...user, email: e.target.value})}/>
                </div>
                <div className="input-field">
                    <label className="label" htmlFor="password-inp">Password</label>
                    <input type={isPasswordVisible ? "text": "password"} placeholder="*****" id="password-inp" onChange={(e)=>setUser({...user, password: e.target.value})}/>
                    <button  id="isPasswordVisible" onClick={()=>setIsPasswordVisible(password=> !password)}>{isPasswordVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>} </button>
                </div>
                <div className="extras flex flex-space-between">
                    <div>
                        <input type="checkbox" id="remember"/> <label htmlFor="remember">Remember me</label>
                    </div>
                    <Link  to="/login" className="forgot-pwd">Forgot Password?</Link>
                </div>
                <button className="btn btn-hover auth-button sign-in" onClick={()=>loginUser()}>Login</button>
                <Link to="/signup"><button className="btn btn-hover auth-button remove-from-wishlist-button">New User? Sign Up</button></Link>
            </div>
        </main>
    </div>
    );
}