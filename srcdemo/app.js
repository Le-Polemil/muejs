import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/muejs.styl';

import { Grid, Element, Row } from '../src/components/containers/Grid';

import './styles/demoapp.styl';
import {GridsProvider} from "../src/store/context/Grids";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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

ReactDOM.render((
    <GridsProvider>
        <App />
    </GridsProvider>
    ), document.getElementById('root')
);