import React, { Component } from "react";
import { Link } from "react-router-dom";
// assets
import logo from "../img/logo-pinkville-hotel-300.svg";
import { FaAlignRight } from "react-icons/fa";
export default class Nav extends Component {
  //State
  state = {
    isToggleon: false,
  };
  //Handlers
  handleToggle = () => {
    this.setState({ isToggleon: !this.state.isToggleon });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={logo}
                alt="Pink Ville Hotel"
                width="30%"
                height="100%"
              />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={
              this.state.isToggleon ? "nav-links show-nav" : "nav-links"
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
