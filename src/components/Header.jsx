import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";
import LoggedIn from "./LoggedIn";

function Header({loggedIn,setLoggedIn}) {
  return (
    <>
      <nav className="topnav">
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/test2">Test2</NavLink>
          <NavLink to="/test3">Test3</NavLink>
          <NavLink to="/test4">Test4</NavLink>
          <div className="login-container">
          {!loggedIn ? (<Login setLoggedIn={setLoggedIn}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
          </div>

        </div>
      </nav>
    </>
  );
}
export default Header;