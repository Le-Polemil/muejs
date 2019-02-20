import React from 'react';

import { Screen } from "../../src/components/ui/Screen";
import Button from "../../src/components/ui/inputs/Button";
import { scrollTo as buttonScrollTo } from "../../src/components/ui/inputs/Button/static";


function goTo ({ elementId, offset }) {
    buttonScrollTo({ target: document.getElementById(elementId), offset });
}

const DemoScreens = () => (
    <>
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
    </>
);
