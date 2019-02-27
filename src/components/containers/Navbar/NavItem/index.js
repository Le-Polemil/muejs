import React from 'react';
import gridify from '../../../../hoc/gridify';




const Logo = ({ children, imgSrc, ...otherProps }) => (
    <span {...otherProps}>
        { imgSrc ? <img src={imgSrc} alt={children}/> : children }
    </span>
);
export const NavLogo = gridify(Logo, { componentName: 'NavLogo' });




const Brand = ({ children, ...otherProps }) => (
    <span {...otherProps}>{ children }</span>
);
export const NavBrand = gridify(Brand, { componentName: 'NavBrand' });




const Label = ({ label, children, ...otherProps }) => (
    <span {...otherProps}>{ label || children }</span>
);
export const NavLabel = gridify(Label, { componentName: 'NavLabel' });




const Icon = ({ icon, size, svg, onClick, ...otherProps }) => {
    const iconClassNames = ['material-icons', svg ? icon : '', size].filter(e => !!e).join(' ');
    return (
        <span {...otherProps} onClick={onClick}>
            <i className={iconClassNames}>
                { svg ? <svg viewBox="0 0 512 512" className="svg-container"><path className="svg-path" /></svg> : icon }
            </i>
        </span>
    );
};
export const NavIcon = gridify(Icon, { componentName: 'NavIcon' });