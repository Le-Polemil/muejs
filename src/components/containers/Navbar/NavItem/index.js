import React from 'react';

export const NavLogo = ({ children, imgSrc, className }) => {
    if (!children && !imgSrc) return null;
    return (imgSrc) ?
        <img className={`nav-logo ${className || ''}`} src={imgSrc} alt={children}/> :
        <a className="nav-brand" href='/'>{ children }</a>
};

export const NavLabel = ({ label, route, className, children }) => {
    return <a className={`nav-label ${className || ''}`} href={ route }>{ label || children }</a>;
};

export const NavIcon = ({ icon, route, className, small, big, large, svg, onClick }) => {
    return (
        <a className={`nav-icon ${className || ''}`} href={ route } onClick={onClick}>
            <i className={`material-icons ${svg ? icon : '' }`}
               style={{fontSize: large ? '2.35rem' : big ? '2.05rem' : small ? '1.55rem' : '1.75rem', minWidth: '2.5rem' }}
            >
                { svg ? <svg viewBox="0 0 512 512" className="svg-container"><path className="svg-path" /></svg> : icon }
            </i>
        </a>
    );
};