import React, { Component } from 'react';
import Navbar from "../Navbar/index.jsx";
import '../../utils/generic.styl';
import '../../utils/font.styl';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <h1 className="bg-success">Success !</h1>
                <h1 className="bg-warning">Warning !</h1>
                <h1 className="bg-error">Error !</h1>
            </div>
        );
    }
}
