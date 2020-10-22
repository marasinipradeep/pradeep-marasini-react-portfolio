import React from 'react';
import './Banner.css'

function Banner({children, title, subtitle,position }) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <h2>{position}</h2>
            <div></div>
            <p>{subtitle}</p>
            {children}

        </div>
    )
}

export default Banner;
