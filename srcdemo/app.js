import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { GridsProvider } from "../src/store/context/Grids";
import { Grid, Element as Cell } from '../src/components/containers/Grid';
import { Screen } from "../src/components/ui/Screen";

import gridify from '../src/hoc/gridify';

import Navbar from './Navbar';
import Footer from './Footer';

import '../src/styles/muejs.styl';

import './styles/demoapp.styl';


const ScreenClipped = ({ row, idgrid, clipPath = 'polygon(0 0, 100% 0, 100% 57%, 0 50%)', clipPath2 = 'polygon(0 0, 100% 7%, 100% 37%, 0 37%)' }) => {
    return (
        <Cell row={row} idgrid={idgrid} fullwidth>
            <svg>
                <defs>
                    <clipPath id="svgPath">
                        <rect x="0" y="0" stroke="#000000" strokeMiterlimit="10" width="10.8%" height="100%"></rect>
                        <rect x="121.5" y="25.5" stroke="#000000" strokeMiterlimit="10" width="5%" height="90%"></rect>
                        <rect x="192.5" y="9.5" stroke="#000000" strokeMiterlimit="10" width="6%" height="80%"></rect>
                        <rect x="271.5" y="44.5" stroke="#000000" strokeMiterlimit="10" width="6.3%" height="74%"></rect>
                        <rect x="349.5" y="25.5" stroke="#000000" strokeMiterlimit="10" width="20.8%" height="79%"></rect>
                        <rect x="574.5" y="44.5" stroke="#000000" strokeMiterlimit="10" width="6.0%" height="82.8%"></rect>
                        <rect x="644.5" y="9.5" stroke="#000000" strokeMiterlimit="10" width="6.8%" height="95%"></rect>
                        <rect x="736.5" y="18.5" stroke="#000000" strokeMiterlimit="10" width="4.9%" height="92%"></rect>
                    </clipPath>
                </defs>
            </svg>
            <img src="https://scontent-cdg2-1.cdninstagram.com/vp/20baa9c81d4710d14b29ed57e48a0671/5CE97080/t51.2885-15/e35/32327465_216157252320595_5964400889018974208_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com"
                style={{ width: '100vw', clipPath: 'url(#svgPath)' }}/>
        </Cell>
    );
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Grid className="page" rowsTemplate={{ 6: 'fit-content(100%)' }} columnsTemplate={{ 1: '1fr', 2: '60vw', 3: '1fr' }}>

        <Navbar row={0} />

        {/*<img src="../src/assets/36188382_649433715391217_5733092298556702720_n.png" alt="img" />*/}
        <ScreenClipped row={1} />

        <Footer row={6} />

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
