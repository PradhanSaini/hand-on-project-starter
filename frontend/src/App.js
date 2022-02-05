// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React  from 'react';
import DashBoard from './pages/DashBoardPage/DashBoard';
import LoginPage from './pages/LoginPage/loginPage';
import SignupPage from './pages/SignupPage/signupPage';
import BgRemover from './pages/BgRemover/BgRemover';
import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={< DashBoard />} />
          <Route path="/loginPage"  element={< LoginPage />} />
          <Route path="/signupPage"  element={< SignupPage />} />
          <Route path='/bg-remover' element={<BgRemover/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
