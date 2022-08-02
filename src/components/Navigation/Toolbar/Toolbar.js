import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-Logo">
        <h1 style={{margin: 0}}>Logo</h1>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

export default Toolbar;