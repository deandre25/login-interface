import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordBtn = ({ title, state, handlePasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input">
      <label className='text'>{title}</label>
      <input 
        type={showPassword ? 'text' : 'password'} 
        className="input" 
        placeholder="Password"
        value={state} 
        onChange={(e) => handlePasswordChange(e.target.value)} 
        required 
      />
      <span className="toggle-password" onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </span>
    </div>
  );
};

export default PasswordBtn;