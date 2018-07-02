import React, { Component } from 'react';

import Navbar, { NavLabel, NavLogo, NavIcon } from '../Navbar';
import Footer, {FooterLine, FooterList} from '../Footer';

import Grid, { GridElement, Row } from '../Grid';

import Body, { BodyElement } from '../Body';



import './index.styl';

export default class App extends Component {
    render() {
        return (
            <Grid>
                <Row pos={1}>
                    <Navbar>
                        <NavLogo justify='left'>MueJS</NavLogo>
                        <NavLabel justify='right' label='cobelt.fr' route='http://cobelt.fr'/>
                        <NavLabel justify='right' label='ophis.cobelt.fr' route='http://ophis.cobelt.fr'/>
                        <NavLabel justify='right' label='Github' route='http://github.cobelt.fr'/>
                        <NavIcon justify='right' icon='more' route='http://plex.cobelt.fr'/>
                    </Navbar>
                </Row>
                <Row pos={2}>
                    <GridElement row={2} height={2} className="grid-container">
                        <Body>
                            <BodyElement col={1} row={1} width={1} className='bg-success'>
                                <h1 className="horiz-align-center">Success !</h1>
                            </BodyElement>
                            <BodyElement col={3} row={1} width={1} className='bg-warning'>
                                <h1 className="horiz-align-center">Warning !</h1>
                            </BodyElement>
                            <BodyElement col={1} row={2} width={3} className='bg-error'>
                                <h1 className="horiz-align-center">Error !</h1>
                            </BodyElement>
                        </Body>
                    </GridElement>
                </Row>
                <Row pos={3}>
                    <Footer>
                        <FooterList row={1}>
                            <h5>Groupe 1</h5>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </FooterList>
                        <FooterList className='social' row={1}>
                            <h5>Social</h5>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </FooterList>
                        <FooterList className='donation' row={1}>
                            <h5>Donation</h5>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                        </FooterList>
                        <FooterLine row={2}>
                            <p>fb</p>
                            <p>twitwi</p>
                            <p>ok</p>
                        </FooterLine>
                    </Footer>
                </Row>
            </Grid>
        );
    }
}
