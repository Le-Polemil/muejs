import React from 'react';

import { Slider } from "../../src/components/containers/Slider";

const DemoSlider = () => (
    <Slider start={0} row={1} className="screen-height" style={{ height: 'calc(100vh - 64px)', marginTop: '64px' }}>
        <img alt="slide" src="https://cdn.allwallpaper.in/wallpapers/1366x768/14917/nature-animals-dogs-husky-1366x768-wallpaper.jpg"/>
        <img alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_998194_5396441439-ab55e5a742-b.jpg"/>
        <img alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_a11de2_1630913.jpg"/>
        <img alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_f4c1e0_jindo-coreen-21.jpg"/>
        <img alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_ebdc7c_2958866632-8e5278b704-b.jpg"/>
    </Slider>
);

export default DemoSlider;
