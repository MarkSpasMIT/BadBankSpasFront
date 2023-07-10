import '../App.css';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const renderTooltip = (desc, props) => (
    <Tooltip id="button-tooltip" className="custom-tooltip" {...props}>
      {desc}
    </Tooltip>
  );

  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-yellow rounded-bottom">
        <NavLink
          className={`navbar-brand ${activeNavItem === '' ? 'active' : ''}`}
          exact
          to="/"
          onClick={() => handleNavItemClick('')}
        >
          BadBank
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeNavItem === 'createAccount' ? 'active' : ''}`}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip" className="custom-tooltip">
                    Here you can create a new account
                  </Tooltip>
                }
              >
                <NavLink
                  className={`nav-link ${activeNavItem === 'createAccount' ? 'active' : ''}`}
                  exact
                  to="/CreateAccount/"
                  onClick={() => handleNavItemClick('createAccount')}
                >
                  Create Account
                </NavLink>
              </OverlayTrigger>
            </li>
            <li className={`nav-item ${activeNavItem === 'deposit' ? 'active' : ''}`}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip" className="custom-tooltip">
                    Here you can make a deposit
                  </Tooltip>
                }
              >
                <NavLink
                  className={`nav-link ${activeNavItem === 'deposit' ? 'active' : ''}`}
                  exact
                  to="/deposit/"
                  onClick={() => handleNavItemClick('deposit')}
                >
                  Deposit
                </NavLink>
              </OverlayTrigger>
            </li>
            <li className={`nav-item ${activeNavItem === 'withdraw' ? 'active' : ''}`}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip" className="custom-tooltip">
                    Here you can make a Withdrawal
                  </Tooltip>
                }
              >
                <NavLink
                  className={`nav-link ${activeNavItem === 'withdraw' ? 'active' : ''}`}
                  exact
                  to="/withdraw/"
                  onClick={() => handleNavItemClick('withdraw')}
                >
                  Withdraw
                </NavLink>
              </OverlayTrigger>
            </li>
            <li className={`nav-item ${activeNavItem === 'allData' ? 'active' : ''}`}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip" className="custom-tooltip">
                    See all your data
                  </Tooltip>
                }
              >
                <NavLink
                  className={`nav-link ${activeNavItem === 'allData' ? 'active' : ''}`}
                  exact
                  to="/alldata/"
                  onClick={() => handleNavItemClick('allData')}
                >
                  AllData
                </NavLink>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
