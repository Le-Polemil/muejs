import React from 'react';
import './index.styl';

const Navbar = () => {
    return (
        <nav>
            <div className='wrap'>
                <NavLabel label='Github.com' route='http://github.cobelt.fr'/>
            </div>
        </nav>
    );
};

export default Navbar;

export const NavLabel = ({ label, route }) => {
    return (
        <a className='navlabel' href={ route }>
            { label }
        </a>
    );
};

export const NavIcon = ({ icon, route }) => {
    return (
        <a className='navicon' href={ route }>
            <i className="material-icons">{ icon }</i>
        </a>
    );
};