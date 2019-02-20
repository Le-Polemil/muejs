import React from 'react';

import {Navbar as MueJSNavbar, NavBrand, NavIcon, NavLabel} from "../../src/components/containers/Navbar";

const Navbar = ({ row, idgrid }) => (
    <MueJSNavbar idgrid={idgrid} position="fixed">
        <NavBrand justify="left">MueJS</NavBrand>
        <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
        <NavLabel justify="right" label="Ophis" route="http://ophis.cobelt.fr"/>
        <NavIcon justify="right" route="http://github.com/cobelt" icon="github" svg />
        <NavIcon className="border-menu-icon" justify="right" icon="menu" />
    </MueJSNavbar>
);

export default Navbar;
