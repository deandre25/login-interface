import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

import Logo from './images/Logo.png';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login logo={Logo} />} />
        <Route path='/forgot-password' element={<ForgotPassword logo={Logo} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
