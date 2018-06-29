import React from 'react';
import ReactDOM from 'react-dom';


import './styles/muejs.styl';
// import './scripts/index.js';
//
// import App from './components/App';
// ReactDOM.render(<App />, document.getElementById('root'));

import Body, { BodyElement } from './components/Body';

import Footer, { FooterList } from './components/Footer';

import Grid, { GridElement } from './components/Grid';

import Navbar, {NavIcon, NavLabel, NavLogo} from './components/Navbar';

export {
    Body,
    BodyElement,

    Footer,
    FooterList,

    Grid,
    GridElement,

    Navbar,
    NavLogo,
    NavLabel,
    NavIcon
};