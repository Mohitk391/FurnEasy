import {NavBar} from "../../components/index";
import "./authentication.css";

export default function SignUp(){
    return (
        <div class="page-layout">
        <NavBar />
        <main class="main flex flex-center">
                <div class="login-body">
                    <div class="title">Signup</div>
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
                            <input type="checkbox" id="remember" /> <label for="remember">Remember me</label>
                        </div>
                    </div>
                    <button class="btn btn-hover auth-button sign-in">Signup</button>
                    <a href="/login.html"><button class="btn btn-hover auth-button sign-in">Existing User? Sign In</button></a>
                </div>
        </main>
    </div>
    );
}