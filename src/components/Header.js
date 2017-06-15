import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light fixed-top bg-faded ml-auto">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/home">News App</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <span class="navbar-text ">
          Interfacing with <i><a href="https://newsapi.org" title="News API">News API</a></i>
        </span>
      </div>
    </nav>
  );
}

export default Header;
