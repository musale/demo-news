import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light fixed-top bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/home">News App</a>
    </nav>
  );
}

export default Header;
