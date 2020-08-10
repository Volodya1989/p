import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navTabs.style.css";

class NavTabs extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav
        id="navBar"
        className="navbar navbar-expand-lg navbar-dark  transparent-nav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Volodymyr Petrytsya
          </Link>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  href="#about"
                >
                  About
                </a>
                {/* <Link
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  to="/about"
                >
                  About
                </Link> */}
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  href="#portfolio"
                >
                  Portfolio
                </a>
                {/* <Link
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  href="#portfolio-info"
                >
                  Portfolio
                </Link> */}
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  href="#contact"
                >
                  Contact
                </a>
                {/* <Link
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  to="/contact"
                >
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default NavTabs;
