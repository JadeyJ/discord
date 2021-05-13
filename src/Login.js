import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";

function Login() {
    const signIn = () => {
        //로그인 기능
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">

            <div className="login__logo">
                <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/discord_logo_0.png?itok=R8j7uaTN"
                alt="discord" />
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    );
}

export default Login;