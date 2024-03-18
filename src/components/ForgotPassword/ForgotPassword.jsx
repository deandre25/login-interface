import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({logo}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
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
      console.log(successMessage);
      setEmail('');
      setError('');
      navigate('/create-new-password');
    } catch (err) {
      setError(err.response.data.detail);
      console.error('Password reset request failed:', error);
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