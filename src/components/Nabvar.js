import React, { Component } from "react";
import '../css/neumorphism.css'

export default class Nabvar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary neumorphismCss"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewStar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
