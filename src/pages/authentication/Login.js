import { NavBar } from "../../components/NavBar/NavBar"
import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";
import Axios from "axios";
import { useUser } from "../../contexts/UserContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [user, setUser] = useState({ email: "", password: "", emailError: false, passwordError: false});
    const navigate = useNavigate();
    const {userDispatch} = useUser();
    const {cartDispatch} = useCart();
    const {wishlistDispatch} = useWishlist();

    const loginUser  = async (isTest) => {
        if(!isTest && ((user.email.trim()).length === 0 || (user.password.trim()).length === 0)){
            if((user.email.trim()).length===0)
                setUser({...user, emailError: true});
            if((user.password.trim()).length === 0)
                setUser({...user, passwordError: true});
        }
        else{
            try {
                const response = await Axios.post("/api/auth/login", {
                email: isTest ? "adarshbalika@gmail.com" : user.email,
                password: isTest ? "adarshbalika" : user.password,
                });
                const token = response.data.encodedToken;
                localStorage.setItem("token", token);
                userDispatch({type: "SET_USER", value: response.data.foundUser});
                cartDispatch({type: "SET_CART", payload: response.data.foundUser.cart});
                wishlistDispatch({type:"SET_WISHLIST", payload: response.data.foundUser.wishlist});
                navigate("/");
            }
            catch(error){
                console.error("error occurred" + error);
            }
        }
    }

    return (
        <div className="page-layout">
        <NavBar />
        <main className="login-main flex flex-center">
            <div className="login-body flex flex-column flex-center flex-gap-1">
                <div className="form-title">Login</div>
                <div className="form-input flex flex-column">
                    <label htmlFor="email-inp">Email</label>
                    <input type="email" placeholder="abc@example.com" id="email-inp" onChange={(e)=>setUser({...user, email: e.target.value, emailError: false})} className={`${user.emailError ? "incorrect-input" : ""}`}/>
                </div>
                <div className="form-input flex flex-column pos-relative">
                    <label htmlFor="password-inp">Password</label>
                    <input type={isPasswordVisible ? "text": "password"} placeholder="*****" id="password-inp" onChange={(e)=>setUser({...user, password: e.target.value, passwordError: false})} className={`${user.passwordError ? "incorrect-input" : ""}`}/>
                    <button  id="isPasswordVisible" onClick={()=>setIsPasswordVisible(password=> !password)}>{isPasswordVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>} </button>
                </div>
                <div className="extras flex flex-space-between">
                    <div className="flex flex-space-between">
                        <input type="checkbox" id="remember"/> <label htmlFor="remember">Remember me</label>
                    </div>
                    <Link  to="/login" className="forgot-pwd">Forgot Password?</Link>
                </div>
                <button className="btn btn-hover auth-button sign-in" onClick={()=>loginUser(false)}>Login</button>
                <button  className="btn btn-hover auth-button sign-in" onClick={()=>loginUser(true)}>Test Login</button>
                <button className="btn btn-hover auth-button remove-from-wishlist-button" onClick={()=>navigate("/signup")}>New User? Sign Up</button>
            </div>
        </main>
    </div>
    );
}