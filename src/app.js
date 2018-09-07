import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import { Grid, Row } from './components/containers/Grid';
import { Navbar, NavLabel, NavLogo } from './components/containers/Navbar';
import { Body, BodyElement } from './components/containers/Body';
import { Footer, FooterLine, FooterList } from './components/containers/Footer';

import { Card, CardDescription, CardImage, CardFooter } from './components/containers/Card';
import { Product, ProductDescription, ProductImage, ProductInfo, ProductTitle } from './components/containers/Product';

class App extends Component {
    render() {
        return (
            <Grid>
                {/*<Row row={1}>*/}
                    {/*<Navbar>*/}
                        {/*<NavLogo justify='left'>MueJS</NavLogo>*/}
                        {/*<NavLabel justify='right' label='cobelt.fr' route='http://cobelt.fr'/>*/}
                        {/*<NavLabel justify='right' label='ophis.cobelt.fr' route='http://ophis.cobelt.fr'/>*/}
                        {/*<NavLabel justify='right' label='Github' route='http://github.cobelt.fr'/>*/}
                    {/*</Navbar>*/}
                {/*</Row>*/}
                <Row row={2}>
                    <Body className="container">
                        <BodyElement width={2}>
                            <Card>
                                <CardImage src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>
                                <CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>
                                <CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>
                            </Card>
                        </BodyElement>
                        {/*<BodyElement col={3} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={5} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={7} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src='https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg'/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<Footer><p>More to come...</p><a href="https://twitter.com/">twitwi</a></Footer>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={2} width={6} className='bg-info'>*/}
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
                {/*<Row row={3}>*/}
                    {/*<Footer>*/}
                        {/*<FooterList row={1}>*/}
                            {/*<h5>Groupe 1</h5>*/}
                            {/*<p>1</p>*/}
                            {/*<p>1</p>*/}
                            {/*<p>1</p>*/}
                        {/*</FooterList>*/}
                        {/*<FooterList className='social' row={1}>*/}
                            {/*<h5>Social</h5>*/}
                            {/*<p>4</p>*/}
                            {/*<p>4</p>*/}
                            {/*<p>4</p>*/}
                        {/*</FooterList>*/}
                        {/*<FooterList className='donation' row={1}>*/}
                            {/*<h5>Donation</h5>*/}
                            {/*<p>7</p>*/}
                            {/*<p>7</p>*/}
                            {/*<p>7</p>*/}
                        {/*</FooterList>*/}
                        {/*<FooterLine style={{ gridColumn: '1 / span 3' }}>*/}
                            {/*<a>fb</a>*/}
                            {/*<a>twitwi</a>*/}
                            {/*<a>twitwi</a>*/}
                            {/*<a>twitwi</a>*/}
                        {/*</FooterLine>*/}
                    {/*</Footer>*/}
                {/*</Row>*/}
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));