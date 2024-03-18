import { useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const ForgotPassword = ({logo}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-qa.qencode.com/v1/auth/password-reset', {
        email
      });

      console.log('Password reset request successful:', response.data);
      setSuccessMessage(response.data.detail);
      setIsAuth(true)
      setEmail('');
      setError('');
      navigate('/create-new-password');
    } catch (error) {
      console.error('Password reset request failed:', error.response.data);
      setError(error.response.data.detail);
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Qencode" />
        </div>

        <h1 className="title">
            Forgot Password?
        </h1>

        <input 
          type="email"
          value={email}
          className="input" 
          placeholder="Enter your email" 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <button className="login-button" type="submit">
          Send
        </button>
        <button className="cancel-button" type="reset">
          Cancel
        </button>
      </div>
    </form>
  )
};

export default ForgotPassword;