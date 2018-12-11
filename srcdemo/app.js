import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../src/styles/muejs.styl';

import { GridsProvider } from "../src/store/context/Grids";
import { Grid, Element as Cell, Row } from '../src/components/containers/Grid';
import { Navbar as MueJSNavbar, NavIcon, NavLabel, NavLogo, NavBrand } from '../src/components/containers/Navbar';
import { Footer as MueJSFooter, FooterLine, FooterList, FooterSeparator } from '../src/components/containers/Footer';

import { Screen } from "../src/components/containers/Screen";
import { Slider } from "../src/components/containers/Slider";


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
			<MueJSFooter idgrid={idgrid} row={6} columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
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


    render() {
        return (
            <Grid className="page" rowsTemplate={{ 4: 'fit-content(100%)' }} columnsTemplate={{ 1: '1fr', 2: '60vw', 3: '1fr' }} style={{ paddingTop: '64px' }}>

                <Navbar />

                <Slider row={1} className="screen-height">
                    <img alt="green-screen" src="https://cdn.allwallpaper.in/wallpapers/1366x768/14917/nature-animals-dogs-husky-1366x768-wallpaper.jpg"/>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_998194_5396441439-ab55e5a742-b.jpg"/>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_a11de2_1630913.jpg"/>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_f4c1e0_jindo-coreen-21.jpg"/>
                </Slider>

                <Screen id="greenScreen" row={2} height={0} className="test-div bg-success" navHeight={'64px'}>
                    <img alt="green-screen" src="https://cdn.allwallpaper.in/wallpapers/1366x768/14917/nature-animals-dogs-husky-1366x768-wallpaper.jpg"/>
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'purpleScreen', offset: -64 })}>Scroll to another image !</Button>
                </Screen>

                <Screen id="orangeScreen" row={3} className="test-div bg-pastel-orange" navHeight={'64px'}>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_998194_5396441439-ab55e5a742-b.jpg"/>
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'redScreen', offset: -64 })}>Scroll to another image !</Button>
                </Screen>

                <Screen  id="purpleScreen" row={4} className="test-div bg-pastel-purple" navHeight={'64px'}>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_a11de2_1630913.jpg"/>
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'orangeScreen', offset: -64 })}>Scroll to another image !</Button>
                </Screen>

                <Screen  id="redScreen" row={5} className="test-div bg-error" navHeight={'64px'}>
                    <img alt="orange-screen" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_f4c1e0_jindo-coreen-21.jpg"/>
                    <Button className="scroll-btn" onClick={() => goTo({ elementId: 'greenScreen', offset: -64 })}>Scroll to another image !</Button>
                </Screen>

                {/*/!*<ArticleList row={2} quantity={10} style={{ paddingLeft: '1rem' }} />*!/*/}

                {/*/!*<ArticlePreview />*!/*/}

                {/*/!*<ArticleList row={2} col={3} style={{ paddingRight: '1rem' }}/>*!/*/}

                {/*{ this.state.shouldDisplayTopButton && (*/}
                    {/*<GridButton*/}
                        {/*className="circle"*/}
                        {/*fixed="true"*/}
                        {/*icon="arrow_drop_up"*/}
                        {/*text=""*/}
                        {/*style={{ color: '#fff', bottom: '2.5%', right: '2.5%' }}*/}
                        {/*onClick={() => goTo({ elementId: 'greenScreen', offset: -64 })}*/}
                    {/*/>*/}
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