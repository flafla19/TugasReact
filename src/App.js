import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Profile from './components/Profile';
import NamaNIM from './components/NamaNIM';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mt-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <Link className="navbar-brand" to="/">Afla</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nama-nim">Nama & NIM</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/nama-nim" element={<NamaNIM />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
