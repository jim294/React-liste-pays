import React from 'react';
import imageReact from '../images/logo192.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={imageReact} alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;