import React, { Component } from 'react';
import Navbar, { NavLabel, NavLogo } from "../Navbar/index.jsx";
import Footer from "../Footer/index.jsx";

import Grid from "../Grid/index.jsx";
import GridElement from "../Grid/GridElement/index.jsx";

import './index.styl';

export default class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <GridElement col={1} row={1} width={4} height={1}>
                        <Navbar>
                            <NavLogo justify="left">MueJS</NavLogo>
                            <NavLabel justify="right" label='cobelt.fr' route='http://cobelt.fr'/>
                            <NavLabel justify="right" label='Github' route='http://github.cobelt.fr'/>
                        </Navbar>
                    </GridElement>
                    <GridElement col={2} row={2} width={2} height={2}>
                        <Grid adaptToContent>
                            <h1>Warning !</h1>
                        </Grid>
                    </GridElement>
                    <GridElement className="bg-error" col={4} row={1} width={1} height={4} style="z-index: 5">
                    </GridElement>
                    <GridElement col={1} row={4} width={4} height={1}>
                        <Footer>
                            This is my footer
                        </Footer>
                    </GridElement>
                </Grid>
            </div>
        );
    }
}
