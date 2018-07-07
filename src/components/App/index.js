import React, { Component } from 'react';

import Grid, { Row } from '../Grid';
import Navbar, { NavLabel, NavLogo, NavIcon } from '../Navbar';
import Body, { BodyElement } from '../Body';
import Footer, { FooterLine, FooterList } from '../Footer';

import Card from '../Card';

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
                    <Body className="container">
                        <BodyElement row={1} width={2} height={2}>
                            <Card className='bg-success'>
                                <h1 className="horiz-align-center">Success !</h1>
                                <h1 className="horiz-align-center">Success !</h1>
                            </Card>
                        </BodyElement>
                        <BodyElement row={1} col={4} width={2} className='bg-warning'>
                            <h1 className="horiz-align-center">Warning !</h1>
                        </BodyElement>
                        <BodyElement row={3} col={2} width={3} className='bg-info'>
                            <h1 className="horiz-align-center">Information</h1>
                        </BodyElement>
                        <BodyElement row={4} width={5} className='bg-error'>
                            <h1 className="horiz-align-center">Error !</h1>
                        </BodyElement>

                    </Body>
                </Row>
                <Row pos={3}>
                    <Footer>
                        <FooterList row={1}>
                            <h5>Groupe 1</h5>
                            <p>1</p>
                        </FooterList>
                        <FooterList className='social' row={1}>
                            <h5>Social</h5>
                            <p>4</p>
                        </FooterList>
                        <FooterList className='donation' row={1}>
                            <h5>Donation</h5>
                            <p>7</p>
                        </FooterList>
                        <FooterLine>
                            <p>fb</p>
                            <p>twitwi</p>
                            <p>twitwi</p>
                            <p>twitwi</p>
                        </FooterLine>
                    </Footer>
                </Row>
            </Grid>
        );
    }
}
