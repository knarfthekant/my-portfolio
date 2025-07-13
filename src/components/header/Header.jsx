import React from 'react';
import CTA from './CTA';

const Header = () => {
    return (
    <header id='home'>
        <div>
            <h5>Hello, I'm</h5>
            <h1>Frank Shan</h1>
            <h5>Computer Science Undergraduate at University of Waterloo</h5>
            <CTA/>
        </div>
    </header>
  );
};

export default Header;
