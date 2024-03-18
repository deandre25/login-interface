import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../style.scss';
import { useState } from 'react';

const CreateNewPassword = ({logo}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    // <form onSubmit={handleForgotPassword}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Qencode" />
        </div>

        <h1 className="title">
            Create new Password
        </h1>

        <div className="password-input">
          <label className='text'>Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            className="input" 
            placeholder="Password"
            // value={password} 
            // onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className="password-input">
          <label className='text'>Confirm Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            className="input" 
            placeholder="Password"
            // value={password} 
            // onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        
        <button className="login-button" type="submit">
          Send
        </button>
        <button className="cancel-button" type="reset">
          Cancel
        </button>
      </div>
    // </form>
  );
};

export default CreateNewPassword;