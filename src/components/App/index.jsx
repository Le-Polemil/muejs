import React, { Component } from 'react';
import Navbar from "../Navbar/index.jsx";
import Grid from "../Grid/index.jsx";

import '../../utils/generic.styl';
import '../../utils/font.styl';


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Grid col={4} row={1} columnsTemplate='25% 25% 1fr' rowsTemplate=''>
                    <div className="col-1 row-1 gridWidth-2 gridHeight-1">
                        <h1 className="bg-success">Success !</h1>
                    </div>
                    <div className="col-2 row-1 gridWidth-1 gridHeight-1">
                        <h1 className="bg-warning">Warning !</h1>
                    </div>
                    <div className="col-3 row-1 gridWidth-1 gridHeight-1">
                        <h1 className="bg-error">Error !</h1>
                    </div>
                </Grid>
            </div>
        );
    }
}
