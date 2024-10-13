import React, { useState } from 'react';
import LoginPage, { Reset, Logo, Password, Footer, Username } from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';
import Login from '../component/Login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPages () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
    <form onSubmit={Auth}>
        <LoginPage  style={{ height: 580 }}>
            <Logo>
                <LoginLogo />
            </Logo>
            <Username value={email} onChange={(e) => setEmail(e.target.value)} />
            <Password value={password} visible={true} onChange={(e) => setPassword(e.target.value)} />
            <Footer>
                Not a member? <a href="#">Sign up now</a>
                <p style={{color: 'red'}}>{msg}</p>
            </Footer>
        </LoginPage>
  </form>  
    );
}

export default LoginPages;