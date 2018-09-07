import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import { Grid, Row } from './components/Grid';
import { Navbar, NavLabel, NavLogo } from './components/Navbar';
import { Body, BodyElement } from './components/Body';
import { Footer, FooterLine, FooterList } from './components/Footer';

import { Card, CardDescription, CardImage, CardFooter } from './components/Card';
import { Product, ProductDescription, ProductImage, ProductInfo, ProductTitle } from './components/Product';

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
                        <BodyElement width={3}>
                            {/*<Product>*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        </BodyElement>
                        {/*<BodyElement col={2} width={2} row={2}>*/}
                            {/*<Product>*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={1} row={2}>*/}
                            {/*<Product>*/}
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