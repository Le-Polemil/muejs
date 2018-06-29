import React from 'react';
import ReactDOM from 'react-dom';


import './styles/muejs.styl';
// import './scripts/index.js';
//
// import App from './components/App/index.jsx';
// ReactDOM.render(<App />, document.getElementById('root'));

import Body, { BodyElement } from './components/Body/index.jsx';

import Footer, { FooterList } from './components/Footer/index.jsx';

import Grid, { GridElement } from './components/Grid/index.jsx';

import Navbar, {NavIcon, NavLabel, NavLogo} from './components/Navbar/index.jsx';

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