// src/Navbar.js
import React, { useState } from 'react';
import { dropdown, Logo, Logo1 } from '../../assets';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHomeOpen, setDropdownHomeOpen] = useState(false);
  const [dropdownAboutOpen, setDropdownAboutOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownHome = () => {
    setDropdownHomeOpen(!dropdownHomeOpen);
  };

  const toggleDropdownAbout = () => {
    setDropdownAboutOpen(!dropdownAboutOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="navbar-logo" src={Logo1} alt="Logo" />
        <div className="menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item dropdown">
            <button className="nav-links" onClick={toggleDropdownHome}>
              Home
              &nbsp;
              <img className={dropdownHomeOpen ? 'dropdownrotate' : ''} src={dropdown}/>
            </button>
            {dropdownHomeOpen && (
              <ul className="dropdown-menu">
                <li><a href="#home-sub1" className="dropdown-link">Sub Link 1</a></li>
                <li><a href="#home-sub2" className="dropdown-link">Sub Link 2</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown">
            <button className="nav-links" onClick={toggleDropdownAbout}>
              About &nbsp;
              <img className={dropdownAboutOpen ? 'dropdownrotate' : ''} src={dropdown}/>
            </button>
            {dropdownAboutOpen && (
              <ul className="dropdown-menu">
                <li><a href="#about-sub1" className="dropdown-link">Sub Link 1</a></li>
                <li><a href="#about-sub2" className="dropdown-link">Sub Link 2</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn">Login</button>
          <button className="btn btn-primary">Get Started <FaArrowRight/></button>
        </div>
      </div>
      <style>
        {`
        .navbar {
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          position: relative;
          padding: 10px 20px;
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .navbar-logo {
          color: black;
          cursor: pointer;
          background-color: #C3E11D;
          padding: 10px 3px;
          border-radius: 10px;
        }

        .menu-icon {
          display: none;
        }

        .nav-menu {
          display: flex;
          flex: 1;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
          margin: 0 30px;
        }

        .nav-links {
          text-decoration: none;
          font-size: 1rem;
          color: black;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
        }

        .nav-links:hover {
          {/* color: #007bff; */}
        }

        .nav-links i {
          margin-left: 5px;
        }

        .navbar-buttons {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          background-color:transparent;
          border-radius: 4px;
          color: black;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .btn-primary {
          background-color: #C3E11D;
          padding: 0 30px;
          border-radius: 200px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .btn-primary:hover {
          {/* background-color: #0056b3; */}
        }

        /* Dropdown styles */
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 150%;
          width: 200%;
          left: -30px;
          background: #333;
          list-style: none;
          padding: 0;
          margin: 0;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          z-index: 1000;
        }

        .dropdown-menu .dropdown-link {
          display: block;
          padding: 10px 20px;
          color: white;
          text-decoration: none;
        }

        .dropdown-menu .dropdown-link:hover {
          background-color: #575757;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
        }

        /* Responsive styles */
        @media screen and (max-width: 768px) {
          .menu-icon {
            display: block;
            font-size: 1.5rem;
            cursor: pointer;
          }

          .nav-menu {
            display: none;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0;
            background: #333;
            z-index: 999;
          }

          .nav-menu.active {
            display: flex;
          }

          .nav-item {
            margin: 10px 0;
          }

          .dropdown-menu {
            position: static;
            background: #333;
          }

          .navbar-buttons {
            display: none; /* Hide buttons on mobile */
          }
        }
        .dropdownrotate{
        rotate: 180deg;
        transition: all ease 0.3s;
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
