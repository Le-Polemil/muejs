import React from 'react';

import {Footer as MueJSFooter, FooterLine, FooterList, FooterSeparator} from "../../src/components/containers/Footer";
import {Element as Cell} from "../../src/components/containers/Grid/GridElement";

const DemoFooter = ({ row, idgrid }) => (
    <MueJSFooter idgrid={idgrid} row={row} columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
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

export default DemoFooter;
