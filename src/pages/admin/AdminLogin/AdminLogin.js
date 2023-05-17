import React from 'react';
import './AdminLogin.css';

export default function AdminLogin() {
    return (
         <div>
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form>
                        <h1>Sign In</h1>
                            <input type = "text" placeholder="Username" name="username" />
                            <input type = "text" placeholder="Password" name="password" />
                            <button type = "submit">SIGN IN</button>
                    </form>
	            </div>

                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1>Admin Login Page</h1>
                            <p>Do your work nicely. Do good deeds get blessed.</p>
                        </div>
                    </div>
                </div>
            </div> 
            </div>     
    )
};


