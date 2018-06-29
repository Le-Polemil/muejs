import React, { Component } from 'react';

import Navbar, { NavLabel, NavLogo, NavIcon } from '../Navbar';
import Footer, { FooterList } from '../Footer';

import Grid, { GridElement } from '../Grid';

import Body, { BodyElement } from '../Body';



import './index.styl';

export default class App extends Component {
    render() {
        return (
            <Grid>
                <GridElement col={1} row={1} width={6} height={1}>
                    <Navbar>
                        <NavLogo justify='left'>MueJS</NavLogo>
                        <NavLabel justify='right' label='cobelt.fr' route='http://cobelt.fr'/>
                        <NavLabel justify='right' label='ophis.cobelt.fr' route='http://ophis.cobelt.fr'/>
                        <NavLabel justify='right' label='Github' route='http://github.cobelt.fr'/>
                        <NavIcon justify='right' icon='more' route='http://plex.cobelt.fr'/>
                    </Navbar>
                </GridElement>
                <GridElement col={1} row={2} width={6} height={2} style={{ minWidth: '76%', justifySelf: 'center' }}>
                    <Body>
                        <BodyElement col={1} row={1} width={1} className='bg-success'>
                            <h1>Success !</h1>
                        </BodyElement>
                        <BodyElement col={3} row={1} width={1} className='bg-warning'>
                            <h1>Warning !</h1>
                        </BodyElement>
                        <BodyElement col={1} row={2} width={3} className='bg-error'>
                            <h1>Error !</h1>
                        </BodyElement>
                    </Body>
                </GridElement>
                {/*<GridElement className='bg-error' col={6} row={2} width={1} height={2} style={{zIndex: 1}}>*/}
                    {/*Coucou*/}
                {/*</GridElement>*/}
                <GridElement col={1} row={4} width={6} height={1}>
                    <Footer>
                        <FooterList>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </FooterList>
                        <FooterList className='social'>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </FooterList>
                        <FooterList className='social'>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                        </FooterList>
                    </Footer>
                </GridElement>
            </Grid>
        );
    }
}
