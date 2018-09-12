import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import { Grid, Row } from './components/containers/Grid';
import {Navbar, NavIcon, NavLabel, NavLogo} from './components/containers/Navbar';
import { Body, BodyElement } from './components/containers/Body';
import { Footer, FooterLine, FooterList } from './components/containers/Footer';

import { Card, CardDescription, CardImage, CardFooter } from './components/containers/Card';
import { Product, ProductDescription, ProductImage, ProductInfo, ProductTitle } from './components/containers/Product';
import Checkbox from "./components/ui/Checkbox";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { borderMenuOpened: false };
    }

    handleBorderMenuClick() {
        this.setState((prevState) => ({ borderMenuOpened: !prevState.borderMenuOpened }));
    }

    render() {
        return (
            <Grid className={this.state.borderMenuOpened && 'border-menu-opened'} rowsTemplate={"auto 1fr auto"}>
                <Row row={1}>
                    <Navbar>
                        <NavLogo justify="left">MueJS</NavLogo>
                        <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                        <NavLabel justify="right" label="ophis.cobelt.fr" route="http://ophis.cobelt.fr"/>
                        <NavLabel justify="right" label="Github" route="http://github.cobelt.fr"/>
                        <NavIcon className="border-menu-icon" justify="right" icon="menu" onClick={() => this.handleBorderMenuClick()} />
                    </Navbar>
                </Row>
                <Row row={2}>
                    <Body className="container">
                        {/*<BodyElement>*/}
                            {/*<form>*/}
                                {/*<Checkbox name="checkbox" onChange={(e) => (console.log(e.target.checked, e.target.value))} />*/}
                            {/*</form>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={3} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={5} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={7} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<Footer><p>More to come...</p><a href="https://twitter.com/">twitwi</a></Footer>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={2} width={6} className="bg-info">*/}
                            {/*<h1 className="h-align-center">Information</h1>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={3}>*/}
                            {/*<Product>*/}
                                {/*<ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={6} width={3}>*/}
                            {/*<Product reverted>*/}
                                {/*<ProductInfo>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                                {/*<ProductImage col={2} src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={2} width={3}>*/}
                            {/*<Product reverted>*/}
                                {/*<ProductInfo>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                                {/*<ProductImage col={2} src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={3}>*/}
                            {/*<Product>*/}
                                {/*<ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                    </Body>
                </Row>
                <Row row={3}>
                    <Footer columnsTemplate={"2.5fr 1fr 2.5fr"}>
                        <FooterList row={1}>
                            <h5>Who am I ?</h5>
                            <p style={{ textAlign: 'left' }}>
                                Hi ! I'm Paul / Cobelt, I'm a french 19 y.o. web developer.<br />
                                I'm in love with WebDesign and JS/React, I take a lot of fun creating websites with those technologies.<br />
                                I currently work at Artprice, a french company near from Lyon, as a junior Full-Stack developer
                            </p>
                        </FooterList>
                        <FooterList className="social" row={1}>
                            <h5>What do I do ?</h5>
                            <p>
                                Websites. I'm creating a framework, MueJS, to make website creation easier for developers.
                                It's fully in React
                            </p>
                        </FooterList>
                        <FooterList className="donation" row={1} style={{ textAlign: 'left' }}>
                            <h5>Donation</h5>
                            <p>If you like my work and want to support me, you can do it here :</p>
                            <FooterLine><a>Tipeee</a><a>U-Tip</a><a>Twitch</a></FooterLine>
                        </FooterList>
                        <FooterLine style={{ gridColumn: "1 / span 3" }}>
                            <a>Facebook</a>
                            <a>Twitter</a>
                            <a>Instagram</a>
                            <a>Github</a>
                        </FooterLine>
                    </Footer>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));