import React from 'react';

export const NavLogo = ({ children, imgSrc, className }) => {
    if (!children && !imgSrc) return null;
    return (imgSrc) ?
        <img className={`navbar-element logo`} src={imgSrc} alt={children}/> :
        <a className={`navbar-element brand`} href='/'>{ children }</a>
};

export const NavLabel = ({ label, route, className }) => {
    return <a className={`navbar-element label`} href={ route }>{ label }</a>;
};

export const NavIcon = ({ icon, route, className, small, big, large }) => {
    return (
        <a className={`navbar-element icon${className ? ' ' + className : ''}`} href={ route }>
            <i className='material-icons'
               style={{fontSize: large ? '2.35rem' : big ? '2.05rem' : small ? '1.55rem' : '1.75rem' }}
            >
                { icon }
            </i>
        </a>
    );
};