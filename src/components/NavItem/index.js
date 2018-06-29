import React from 'react';

export const NavLogo = ({ children, imgSrc }) => {
    if (!children && !imgSrc) return null;
    return (imgSrc) ? <img className='logo' src={imgSrc} alt={children}/> : <a className='brand' href='/'>{ children }</a>
};

export const NavLabel = ({ label, route }) => {
    return <a className='navlabel' href={ route }>{ label }</a>;
};

export const NavIcon = ({ icon, route }) => {
    return <a className='navicon' href={ route }><i className='material-icons'>{ icon }</i></a>;
};