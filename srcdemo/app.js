import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/muejs.styl';

import { GridsProvider } from "../src/store/context/Grids";
import { Grid, Element as Cell, Row } from '../src/components/containers/Grid';
import { Navbar as MueJSNavbar, NavIcon, NavLabel, NavLogo, NavBrand } from '../src/components/containers/Navbar';
import { Footer as MueJSFooter, FooterLine, FooterList, FooterSeparator } from '../src/components/containers/Footer';

import { Screen } from "../src/components/containers/Screen";

import Button, { Button as GridButton } from "../src/components/ui/inputs/Button";
import { scrollTo as buttonScrollTo } from "../src/components/ui/inputs/Button/static";


import './styles/demoapp.styl';



class Navbar extends Component {
    render() {
        const { idgrid } = this.props;
        return (
            <MueJSNavbar idgrid={idgrid} fixed="true">
                <NavBrand justify="left">MueJS</NavBrand>
                <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                <NavLabel justify="right" label="Ophis" route="http://ophis.cobelt.fr"/>
                <NavIcon justify="right" route="http://github.com/cobelt" icon="github" svg />
                <NavIcon className="border-menu-icon" justify="right" icon="menu" />
            </MueJSNavbar>
        );
    }
}

class Footer extends Component {
	render() {
		const { idgrid } = this.props;
		return (
			<MueJSFooter idgrid={idgrid} row={4} columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
				<FooterList row={1} col={1} width={2}>
					<Cell type="h5">Who am I ?</Cell>

                    <Cell type="p" style={{ textAlign: 'left' }}>
                        Hi ! I'm Paul / Cobelt, I'm a french 19 y.o. web developer.<br />
                        I'm in love with WebDesign and JS/React, I take a lot of fun creating websites with those technologies.<br />
                        I currently work at Artprice, a french company near from Lyon, as a junior Full-Stack developer
                    </Cell>
				</FooterList>

				<FooterList className="donation" row={1} col={3} width={2}>
					<Cell type="h5">Donation</Cell>

					<Cell type="p">
                        If you like my work and want to support me, you can do it here&nbsp;:
                    </Cell>

					<FooterLine>
						<Cell type="a" href="https://www.tipeee.com/cobelt">Tipeee</Cell>
						<Cell type="a" href="https://www.utip.io">U-Tip</Cell>
						<Cell type="a" href="https://www.twitch.tv/cobeltdierk">Twitch</Cell>
					</FooterLine>
				</FooterList>

				<FooterList className="social" row={1} col={5} width={2}>
					<Cell type="h5">What do I do ?</Cell>

                    <Cell type="p" style={{ textAlign: 'right' }}>
                        Websites. I'm creating a react framework, MueJS, to create them easier.
                    </Cell>

					<FooterLine row={1}>
						<Cell type="a" href="http://cobelt.fr">cobelt.fr</Cell>
						<Cell type="a" href="http://muejs.cobelt.fr">muejs.fr</Cell>
						<Cell type="a" href="http://karyt.fr">karyt.fr</Cell>
					</FooterLine>
				</FooterList>

				<FooterSeparator row={2} col={2} width={4} />

				<FooterLine row={3}>
					<Cell type="a">Facebook</Cell>

					<Cell type="a" href="https://www.youtube.com/channel/UC7rRGEAXomdP_iUCC0LV3Ag/live">Youtube</Cell>

					<Cell type="a" href="https://twitter.com/cobelt_dierk">Twitter</Cell>

					<Cell type="a" href="https://www.instagram.com/cobelt_dierk">Instagram</Cell>

					<Cell type="a" href="http://github.com/cobelt">Github</Cell>
				</FooterLine>
			</MueJSFooter>
		);
	}
}

function goTo ({ elementId, offset }) {
    buttonScrollTo({ target: document.getElementById(elementId), offset });
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { opened: true, shouldDisplayTopButton: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll())
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll())
    }

    handleScroll() {
        const actualScroll = window.scrollY;
        const anchor = document.getElementById('orangeScreen');

        this.setState({ shouldDisplayTopButton: actualScroll > (anchor && anchor.offsetTop - 64) });
    }


    render() {
        return (
            <Grid className="page" rowsTemplate={{ 4: 'fit-content(100%)' }} columnsTemplate={{ 1: '1fr', 2: '60vw', 3: '1fr' }}>

                <Navbar />

                <Screen id="greenScreen" row={1} className="test-div bg-success" marginNavHeight="true" navHeight={'64px'}>
                    Blblblbl
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'purpleScreen', offset: -64 })}>Click me !</Button>
                </Screen>

                <Screen id="orangeScreen" row={2} className="test-div bg-pastel-orange" navHeight={'64px'}>
                    Blblblbl
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'greenScreen', offset: -64 })}>Click me !</Button>
                </Screen>

                <Screen  id="purpleScreen" row={3} className="test-div bg-pastel-purple" navHeight={'64px'}>
                    Blblblbl
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'orangeScreen', offset: -64 })}>Click me !</Button>
                </Screen>

                {/*/!*<ArticleList row={2} quantity={10} style={{ paddingLeft: '1rem' }} />*!/*/}

                {/*/!*<ArticlePreview />*!/*/}

                {/*/!*<ArticleList row={2} col={3} style={{ paddingRight: '1rem' }}/>*!/*/}

                {/*{ this.state.shouldDisplayTopButton && (*/}
                    <GridButton
                        className="circle"
                        fixed="true"
                        icon="arrow_drop_up"
                        text=""
                        style={{ backgroundColor: '#af4b2b', color: '#fff', bottom: '2.5%', right: '2.5%' }}
                        onClick={() => goTo({ elementId: 'greenScreen', offset: -64 })}
                    />
                {/*) }*/}

                <Footer />

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