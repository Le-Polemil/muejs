import React, { Component } from 'react';
import Navbar, { NavLabel, NavLogo } from "../Navbar/index.jsx";
import Grid from "../Grid/index.jsx";
import GridElement from "../Grid/GridElement/index.jsx";

import './index.styl';
import '../../utils/font.styl';


export default class App extends Component {
    render() {
        return (
            <div>
                <Grid columnsTemplate='min-content 1fr 1fr min-content' rowsTemplate='min-content 1fr 1fr min-content'>
                    <GridElement col={1} row={1} width={4} height={1}>
                        <Navbar>
                            <NavLogo>Cobelt.fr</NavLogo>
                            <NavLabel justify="end" label='Cobelt.fr' route='http://cobelt.fr'/>
                            <NavLabel justify="end" label='Github' route='http://github.cobelt.fr'/>
                        </Navbar>
                    </GridElement>
                    <GridElement col={2} row={2} width={2} height={2}>
                        {/*<Grid adaptToContent>*/}
                            {/*<h1>Warning !</h1>*/}
                        {/*</Grid>*/}
                    </GridElement>
                    <GridElement col={1} row={4} width={4} height={1}>
                        <h4>Error !</h4>
                    </GridElement>
                </Grid>
            </div>
        );
    }
}
