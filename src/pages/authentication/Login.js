import { NavBar } from "../../components/NavBar/NavBar"
import "./authentication.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div class="page-layout">
        <NavBar />
        <main class="authenticate-main flex flex-center">
            <div class="login-body">
                <div class="title">Login</div>
                <div class="input-field">
                    <label class="label" for="email-inp">Email</label>
                    <input type="email" placeholder="abc@example.com" id="email-inp" />
                </div>
                <div class="input-field">
                    <label class="label" for="password-inp">Password</label>
                    <input type="password" placeholder="*****" id="password-inp" />
                </div>
                <div class="extras flex flex-space-between">
                    <div>
                        <input type="checkbox" id="remember"/> <label for="remember">Remember me</label>
                    </div>
                    <Link  to="/login" class="forgot-pwd">Forgot Password?</Link>
                </div>
                <button class="btn btn-hover auth-button sign-in">Login</button>
                <Link to="/signup"><button class="btn btn-hover auth-button remove-from-wishlist-button">New User? Sign Up</button></Link>
            </div>
        </main>
    </div>
    );
}

