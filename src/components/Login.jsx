import { useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

import CustomButton from './CustomButton/CustomButton';
import PasswordBtn from './PasswordBtn/PasswordBtn';
import GoogleIcon from '../images/Google.svg';
import GithubIcon from '../images/GitHub.svg';

const Login = ({logo}) => {
  const [email, setEmail] = useState('test+ui@qencode.com');
  const [password, setPassword] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsEmailEntered(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-qa.qencode.com/v1/auth/login', {
        email,
        password
      });

      console.log('Login successful:', response.data);

      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      setError(err.response.data.detail);
      console.error('Login failed:', error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <form onSubmit={isEmailEntered ? handleLogin : handleEmailSubmit}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Qencode" />
        </div>

        <h1 className="title">
            Log in to your account
        </h1>

        <div className="auth-buttons">
          <CustomButton title={'Google'} imageUrl={GoogleIcon} handleClick={login} />

          <CustomButton title={'GitHub'} imageUrl={GithubIcon} handleClick={login} />
        </div>

        <div className="divider"></div>

        <input 
          type="email"
          value={email}
          className="input" 
          placeholder="Work email" 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {isEmailEntered && (
          <div className="password-input-container">
            <PasswordBtn title={password} state={password} handlePasswordChange={setPassword} />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
          </div>
        )}
        <button className="login-button" type="submit">
          Log in to Qencode
        </button>
        <div className="register-link">
          Is your company new to Qencode? <Link to='#'>Sign up</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;