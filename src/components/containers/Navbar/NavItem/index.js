import React from 'react';
import gridify from '../../../../hoc/gridify';




const Logo = ({ children, imgSrc, route, ...otherProps }) => (
    <a {...otherProps} href={ route || '/' }>
        { imgSrc ? <img src={imgSrc} alt={children}/> : children }
    </a>
);
export const NavLogo = gridify(Logo, { componentName: 'nav-logo' });




const Brand = ({ children, route, ...otherProps }) => (
    <a {...otherProps} href={ route || '/' }>{ children }</a>
);
export const NavBrand = gridify(Brand, { componentName: 'nav-brand' });




const Label = ({ label, route, children, ...otherProps }) => (
    <a {...otherProps} href={ route }>{ label || children }</a>
);
export const NavLabel = gridify(Label, { componentName: 'nav-label' });




const Icon = ({ icon, route, size, svg, onClick, ...otherProps }) => {
    const iconClassNames = ['material-icons', svg ? icon : '', size].filter(e => !!e).join(' ');
    return (
        <a {...otherProps} href={ route } onClick={onClick}>
            <i className={iconClassNames}>
                { svg ? <svg viewBox="0 0 512 512" className="svg-container"><path className="svg-path" /></svg> : icon }
            </i>
        </a>
    );
};
export const NavIcon = gridify(Icon, { componentName: 'nav-icon' });