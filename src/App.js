import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FormDatas from './components/FormDatas'
import { HelmetProvider } from 'react-helmet-async';

function App() {
  // ReactGA.initialize('G-X13FT1EE94'); // Buraya kendi Google Analytics Kimliğinizi ekleyin
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>

      <Router>
        <div className="App">
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
         
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/form-data'}>
                    Form Data
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav> */}
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<FormDatas />} />
                <Route path="/form-data" element={<FormDatas />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </HelmetProvider>

  )
}
export default App