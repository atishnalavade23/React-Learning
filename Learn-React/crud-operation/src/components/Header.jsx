import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{props.title}</span>
        <span className="badge bg-light text-dark">
          Total Students: {props.totalCount}
        </span>
      </div>
    </nav>
  );
}

export default Header;