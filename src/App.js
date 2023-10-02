import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FormDatas from './components/FormDatas'
import { HelmetProvider } from 'react-helmet-async';
import Payment from './components/Payment'
import { invisibleText, isWebsiteVisible } from './helper/constants'

function App() {
  // ReactGA.initialize('G-X13FT1EE94'); // Buraya kendi Google Analytics Kimliğinizi ekleyin
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>

      <Router>
        {isWebsiteVisible ?
          <div className="App">
            {/* <nav className="navbar navbar-expand navbar-light fixed-top">
              <div className="container">

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/form-data'}>
                        Form Data
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/payment'}>
                        Payment
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
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </div>
            </div>
          </div>
          : 
          <div className="auth-wrapper">
              <div className="auth-inner">
                  <form>
                  <p style={{textAlign: "center"}}>{invisibleText}</p>
                  </form>
              </div>
            </div>
        }
      </Router>

    </HelmetProvider>

  )
}
export default App