import { useState } from 'react';
import axios from 'axios';

import PasswordBtn from '../PasswordBtn/PasswordBtn';

const CreateNewPassword = ({logo}) => {
  const [token, setToken] = useState('qwe123qwe123qwe123qwe');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("Passwords don't match");
      console.log(error);
      return;
    }

    try {
      const response = await axios.post('https://auth-qa.qencode.com/v1/auth/password-set', {
        token,
        newPassword
      });

      console.log('Password reset successful:', response.data);
      setSuccessMessage(response.data.detail);
      console.log(successMessage);

      localStorage.setItem('resetToken', token);

      setToken('');
      setNewPassword('');
      setConfirmNewPassword('');
      setError('');
    } catch (error) {
      console.error('Password reset failed:', error.response.data);
      setError(error.response.data.detail);
    }
  };

  return (
    <form onSubmit={handleResetPassword}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Qencode" />
        </div>

        <h1 className="title">
            Create new Password
        </h1>

        <PasswordBtn title='Password' state={newPassword} handlePasswordChange={setNewPassword} />

        <PasswordBtn title='Confirm Password' state={confirmNewPassword} handlePasswordChange={setConfirmNewPassword} />
        
        <button className="login-button" type="submit">
          Send
        </button>
        <button className="cancel-button" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateNewPassword;