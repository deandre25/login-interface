import { Route, Routes, HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './App.css';
import Login from './components/Login';

import Logo from './images/Logo.png';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import CreateNewPassword from './components/CreateNewPassword/CreateNewPassword';

function App() {
  return (
    <HashRouter>
      <GoogleOAuthProvider clientId="AIzaSyCArU7P7dFM4Q5nkWHI9tZ6bK2iMgkO7FQ">
        <Routes>
          <Route path='/' element={<Login logo={Logo} />} />
          <Route path='/forgot-password' element={<ForgotPassword logo={Logo} />} />
          <Route path='/create-new-password' element={<CreateNewPassword logo={Logo} />} />
        </Routes>
      </GoogleOAuthProvider>
    </HashRouter>
  );
};

export default App;
