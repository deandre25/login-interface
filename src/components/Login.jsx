import GoogleIcon from '../images/Google.svg';
import GithubIcon from '../images/GitHub.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = ({logo}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // Проверка существования пользователя с введенной почтой
    try {
      // const response = await axios.post('https://auth-qa.qencode.com/v1/auth/login', {
      //   email
      // });
      // Если пользователь существует, отобразить поле для ввода пароля
      setIsEmailEntered(true);
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError(error.response.data.detail);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://auth-qa.qencode.com/v1/auth/login', {
      //   email,
      //   password
      // });

      // console.log('Login successful:', response.data);

      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError(error.response.data.detail);
    }
  };

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
          <button className='auth-buttons_btn'>
            <img src={GoogleIcon} alt="Google icon" />
            <p>Google</p>
          </button>

          <button className='auth-buttons_btn'>
            <img src={GithubIcon} alt="GitHub icon" />
            <p>Github</p>
          </button>
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
            <div className="password-input">
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="input" 
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
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