import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
            <div className="navbar-translate">
                <a className="navbar-brand" href="/"><i className="fa fa-eye" style={{margin: "0 12px 0 0", color: "gray"}}></i> Movie</a>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
