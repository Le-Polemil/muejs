import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import { Grid, GridElement, Row } from './components/containers/Grid';
import { Navbar, NavIcon, NavLabel, NavLogo } from "./components/containers/Navbar";
import { Footer, FooterLine, FooterList, FooterSeparator } from "./components/containers/Footer";

import './styles/demoapp.styl';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid style={{ minHeight: '10vh', gridColumnGap: '1rem', gridRowGap: '1rem' }}>
                <Row>
                    <Navbar>
                        <NavLogo justify="left">MueJS</NavLogo>
                        <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                        <NavLabel justify="right" label="Ophis" route="http://ophis.cobelt.fr"/>
                        <NavIcon justify="right" route="http://github.com/cobelt" icon="github" svg />
                        <NavIcon className="border-menu-icon" justify="right" icon="menu" />
                    </Navbar>
                </Row>

                <GridElement row={2} width={2} style={{ paddingLeft: '1rem' }}>
                    <div className="bg-error min-height-15">
                        Bonjour 2
                    </div>
                </GridElement>

                <GridElement row={2} height={5} col={3} width={2}>
                    <div className="bg-info min-height-15">
                        Bonjour 1
                    </div>
                </GridElement>

                <GridElement row={2} col={5} width={2} style={{ paddingRight: '1rem' }}>
                    <div className="bg-error min-height-15">
                        Bonjour 2
                    </div>
                </GridElement>



                <GridElement row={3} col={2}>
                    <div className="bg-success min-height-15">
                        Bonjour 3
                    </div>
                </GridElement>

                <GridElement row={3} col={5}>
                    <div className="bg-success min-height-15">
                        Bonjour 3
                    </div>
                </GridElement>



                <GridElement row={4} style={{ paddingLeft: '1rem' }}>
                    <div className="bg-warning min-height-15">
                        Bonjour 4
                    </div>
                </GridElement>

                <GridElement row={4} col={6} style={{ paddingRight: '1rem' }}>
                    <div className="bg-warning min-height-15">
                        Bonjour 4
                    </div>
                </GridElement>



                <GridElement row={5} col={2}>
                    <div className="bg-success min-height-15">
                        Bonjour 3
                    </div>
                </GridElement>

                <GridElement row={5} col={5}>
                    <div className="bg-success min-height-15">
                        Bonjour 3
                    </div>
                </GridElement>



                <GridElement row={6} width={2} style={{ paddingLeft: '1rem' }}>
                    <div className="bg-error min-height-15">
                        Bonjour 2
                    </div>
                </GridElement>

                <GridElement row={6} col={5} width={2} style={{ paddingRight: '1rem' }}>
                    <div className="bg-error min-height-15">
                        Bonjour 2
                    </div>
                </GridElement>



                <Row row={7}>
                    <Footer columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
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
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));