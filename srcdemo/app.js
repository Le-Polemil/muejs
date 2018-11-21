import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/muejs.styl';

import { Grid, Element, Row } from '../src/components/containers/Grid';
import { Navbar, NavIcon, NavLabel, NavLogo } from '../src/components/containers/Navbar';
import { Footer, FooterLine, FooterList, FooterSeparator } from '../src/components/containers/Footer';
import { ArticleList } from '../src/components/containers/ArticleList';

import './styles/demoapp.styl';

const articleList = [
    'coucou',
    'coucou2',
    'coucou23',
    'coucou234',
    'coucou2345',
    'coucou23456',
    'coucou234567',
    'coucou2345678',
    'coucou23456789',
];

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const footerRow = 3;
        return (
            <Grid className="page">

                <Element width={2}>
                    Bouh
                </Element>

                <Element width={2}>
                    Bouh
                </Element>

            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));