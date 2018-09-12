import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import {Grid, GridElement, Row} from './components/containers/Grid';
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
            <Grid columnsTemplate={"1fr auto"} rowsTemplate={"auto 1fr auto"}>
                <Row>
                    <Navbar>
                        <NavLogo justify="left">MueJS</NavLogo>
                        <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                        <NavLabel justify="right" label="ophis.cobelt.fr" route="http://ophis.cobelt.fr"/>
                        <NavLabel justify="right" label="Github" route="http://github.com/cobelt"/>
                        {/*<NavIcon className={`border-menu-icon${this.state.borderMenuOpened ? ' opn' : ''}`} justify="right" icon="menu" onClick={() => this.handleBorderMenuClick()} />*/}
                    </Navbar>
                </Row>
                <GridElement row={2}>
                    <Body className="container">
                        <BodyElement col={1}>
                            <Product reverted>
                                <ProductInfo>
                                    <ProductTitle>TACOS</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                                <ProductImage col={2} src="http://mustikebab.com/wp-content/uploads/2016/02/Tacos-Kebab-musti-kebab.jpg" />
                            </Product>
                        </BodyElement>
                        <BodyElement col={2}>
                            <Product>
                                <ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />
                                <ProductInfo col={2}>
                                    <ProductTitle>BUCHETTE</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                            </Product>
                        </BodyElement>
                        <BodyElement row={2} width={2}>
                            <Product>
                                <ProductImage src="https://restomalin.com/domaine/le-tacos-de-grenoble.fr/images/image4_tacos_de_grenoble.PNG" />
                                <ProductInfo col={2}>
                                    <ProductTitle>PROMO EXCLUSIVE</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                            </Product>
                        </BodyElement>
                    </Body>
                </GridElement>
                {/*<GridElement row={2} col={2}>*/}
                    {/*<Body className="container">*/}
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
                    {/*</Body>*/}
                {/*</GridElement>*/}
                <Row row={3}>
                    <Footer columnsTemplate={"1.1fr 0.8fr 1.1fr"}>
                        <FooterList row={1}>
                            <h5>Who am I ?</h5>
                            <p style={{ textAlign: 'left' }}>
                                Hi ! I'm Paul / Cobelt, I'm a french 19 y.o. web developer.<br />
                                I'm in love with WebDesign and JS/React, I take a lot of fun creating websites with those technologies.<br />
                                I currently work at Artprice, a french company near from Lyon, as a junior Full-Stack developer
                            </p>
                        </FooterList>

                        <FooterList className="donation" row={1}>
                            <h5>Donation</h5>
                            <p>If you like my work and want to support me, you can do it here :</p>
                            <FooterLine>
                                <a href="https://www.tipeee.com/cobelt">Tipeee</a>
                                <a href="https://www.utip.io">U-Tip</a>
                                <a href="https://www.twitch.tv/cobeltdierk">Twitch</a>
                            </FooterLine>
                        </FooterList>

                        <FooterList className="social" row={1}>
                            <h5>What do I do ?</h5>
                            <p style={{ textAlign: 'right' }}>
                                Websites. I'm creating a framework, MueJS, to make website creation easier for developers.
                                Done in React.
                            </p>
                            <FooterLine row={1}>
                                <a href="http://cobelt.fr">cobelt.fr</a>
                                <a href="http://karyt.fr">karyt.fr</a>
                            </FooterLine>
                        </FooterList>

                        <FooterLine style={{ gridColumn: "1 / span 3" }}>
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