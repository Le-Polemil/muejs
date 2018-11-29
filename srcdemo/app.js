import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/muejs.styl';

import { GridsProvider } from "../src/store/context/Grids";
import { Grid, Element, Row } from '../src/components/containers/Grid';
import { Navbar, NavIcon, NavLabel, NavLogo, NavBrand } from '../src/components/containers/Navbar';
import { Footer, FooterLine, FooterList, FooterSeparator } from '../src/components/containers/Footer';

import './styles/demoapp.styl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { opened: false }
    }

    render() {
        return (
            <Grid className="page" rowsTemplate={{ 1: 'fit-content(100%)', 3: 'fit-content(100%)' }}>

                <Navbar>
                    <NavBrand justify="left">MueJS</NavBrand>
                    <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                    <NavLabel justify="right" label="Ophis" route="http://ophis.cobelt.fr"/>
                    <NavIcon justify="right" route="http://github.com/cobelt" icon="github" svg />
                    <NavIcon className="border-menu-icon" justify="right" icon="menu" />
                </Navbar>


                <Element row={2} onClick={() => this.setState(state => ({ opened: !state.opened }))} className="bg-pastel-orange">
                    Click to { this.state.opened ? 'close' : 'open' } !
                </Element>

                <Element col={2} width={this.state.opened ? 3 : 0} row={2} className="bg-success">
                    Blblblbl
                </Element>

                <Element row={2} className="bg-pastel-purple">
                    Bouh
                </Element>

                {/*<ArticleList row={2} quantity={10} style={{ paddingLeft: '1rem' }} />*/}

                {/*<ArticlePreview />*/}

                {/*<ArticleList row={2} col={3} style={{ paddingRight: '1rem' }}/>*/}


                <Footer row={3} columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
                    <FooterList row={1} col={1} width={2}>
                        <h5>Who am I ?</h5>
                        <p style={{ textAlign: 'left' }}>
                            Hi ! I'm Paul / Cobelt, I'm a french 19 y.o. web developer.<br />
                            I'm in love with WebDesign and JS/React, I take a lot of fun creating websites with those technologies.<br />
                            I currently work at Artprice, a french company near from Lyon, as a junior Full-Stack developer
                        </p>
                    </FooterList>

                    <FooterList className="donation" row={1} col={3} width={2}>
                        <h5>Donation</h5>
                        <p>If you like my work and want to support me, you can do it here :</p>
                        <FooterLine>
                            <a href="https://www.tipeee.com/cobelt">Tipeee</a>
                            <a href="https://www.utip.io">U-Tip</a>
                            <a href="https://www.twitch.tv/cobeltdierk">Twitch</a>
                        </FooterLine>
                    </FooterList>

                    <FooterList className="social" row={1} col={5} width={2}>
                        <h5>What do I do ?</h5>
                        <p style={{ textAlign: 'right' }}>
                            Websites. I'm creating a react framework, MueJS, to create them easier.
                        </p>
                        <FooterLine row={1}>
                            <a href="http://cobelt.fr">cobelt.fr</a>
                            <a href="http://muejs.cobelt.fr">muejs.fr</a>
                            <a href="http://karyt.fr">karyt.fr</a>
                        </FooterLine>
                    </FooterList>

                    <FooterSeparator row={2} col={2} width={4} />

                    <FooterLine row={3}>
                        <a>Facebook</a>
                        <a href="https://www.youtube.com/channel/UC7rRGEAXomdP_iUCC0LV3Ag/live">Youtube</a>
                        <a href="https://twitter.com/cobelt_dierk">Twitter</a>
                        <a href="https://www.instagram.com/cobelt_dierk">Instagram</a>
                        <a href="http://github.com/cobelt">Github</a>
                    </FooterLine>
                </Footer>
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