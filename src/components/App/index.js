import React, { Component } from 'react';

import Grid, { Row } from '../Grid';
import Navbar, { NavLabel, NavLogo, NavIcon } from '../Navbar';
import Body, { BodyElement } from '../Body';
import Footer, { FooterLine, FooterList } from '../Footer';

import Card, { CardDescription, CardImage, CardFooter } from '../Card';

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
                        <BodyElement width={2}>
                            <Card className='bg-success'>
                                <CardImage className="horiz-align-center" src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>
                                <CardDescription className="horiz-align-center"><h3>Success !</h3></CardDescription>
                                <CardFooter><p>More to come</p><a href="https://twitter.com/">twitwi</a></CardFooter>
                            </Card>
                        </BodyElement>
                        <BodyElement col={3} width={2}>
                            <Card className='bg-success'>
                                <CardImage className="horiz-align-center" src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>
                                <CardDescription className="horiz-align-center"><h3>Success !</h3></CardDescription>
                                <CardFooter><p>More to come</p><a href="https://twitter.com/">twitwi</a></CardFooter>
                            </Card>
                        </BodyElement>
                        <BodyElement col={5} width={2}>
                            <Card className='bg-success'>
                                <CardImage className="horiz-align-center" src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>
                                <CardDescription className="horiz-align-center"><h3>Success !</h3></CardDescription>
                                <CardFooter><p>More to come</p><a href="https://twitter.com/">twitwi</a></CardFooter>
                            </Card>
                        </BodyElement>
                        <BodyElement col={7} width={2}>
                            <Card className='bg-success'>
                                <CardImage className="horiz-align-center" src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>
                                <CardDescription className="horiz-align-center"><h3>Success !</h3></CardDescription>
                                <CardFooter><p>More to come</p><a href="https://twitter.com/">twitwi</a></CardFooter>
                            </Card>
                        </BodyElement>
                        <BodyElement col={2} width={6} className='bg-info'>
                            <h1 className="horiz-align-center">Information</h1>
                        </BodyElement>
                        <BodyElement width={8} className='bg-error'>
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
