import {NavBar} from "../../components/NavBar/NavBar";
import "./authentication.css";
import { Link } from "react-router-dom";
import {useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [user, setUser] = useState({firstName:"",lastName: "", email: "", password: ""});

    const signUser = async() => {
        try {
            const response = await axios.post(`/api/auth/signup`, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            });
            const token = response.data.encodedToken;
            localStorage.setItem("token", token);
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <div className="page-layout">
        <NavBar />
        <main className="authenticate-main flex flex-center">
                <div className="login-body flex flex-column">
                    <div className="title">Signup</div>
                    <div className="input-field">
                        <label className="label" htmlFor="firstname-inp">FirstName</label>
                        <input type="text" placeholder="First Name" id="firstname-inp" onChange={(e)=>setUser({...user, firstName: e.target.value})}/>
                    </div>
                    <div className="input-field">
                        <label className="label" htmlFor="lastname-inp">LastName</label>
                        <input type="text" placeholder="Last Name" id="lastname-inp" onChange={(e)=>setUser({...user, lastName: e.target.value})}/>
                    </div>
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
                            <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me</label>
                        </div>
                    </div>
                    <button className="btn btn-hover auth-button sign-in" onClick={()=>signUser()}>Signup</button>
                    <Link to="/login"><button className="btn btn-hover auth-button sign-in">Existing User? Sign In</button></Link>
                </div>
        </main>
    </div>
    );
}