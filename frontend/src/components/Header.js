import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className="topnav">
      <a className="logo" href="/">
        Movie Maker
      </a>
      <div className="search__container">
        <form>
          <a href="/">Add Movies</a>
          <input type="text" placeholder="Serach..." name="search"></input>
          <button type="submit">
          <i className="fa fa-search icon"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
