import React from 'react';

import {List} from "../../src/components/containers/List";
import {Article} from "../../src/components/containers/Article";

const DemoList = () => (
    <List gap={'2rem'} width={3} columnsTemplate={'1fr 1fr 1fr'}>
        <Article row={1} fullwidth>
            <img className="fill-parent" alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_ebdc7c_2958866632-8e5278b704-b.jpg"/>
        </Article>
        <Article row={2} col={1}>
            <img className="fill-parent" alt="slide" src="https://cdn.allwallpaper.in/wallpapers/1366x768/14917/nature-animals-dogs-husky-1366x768-wallpaper.jpg"/>
        </Article>
        <Article row={2} col={2}>
            <img className="fill-parent" alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_998194_5396441439-ab55e5a742-b.jpg"/>
        </Article>
        <Article row={2} col={3}>
            <img className="fill-parent" alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_a11de2_1630913.jpg"/>
        </Article>
        <Article row={3} fullwidth>
            <img className="fill-parent" alt="slide" src="https://scontent-cdg2-1.cdninstagram.com/vp/6b7c6615bd4263210bf1acf435fd4a38/5CFF0B88/t51.2885-15/e35/49810549_101768970874988_4966748149035837883_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com"/>
        </Article>
        <Article row={4}>
            <img className="fill-parent" alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_f4c1e0_jindo-coreen-21.jpg"/>
        </Article>
        <Article row={4}>
            <img className="fill-parent" alt="slide" src="https://scontent-cdg2-1.cdninstagram.com/vp/4cc45a558f98f3ede13f8f2eb56f0936/5CCA3F28/t51.2885-15/e35/49287563_538791226589817_7819044237695906554_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com"/>
        </Article>
        <Article row={4}>
            <img className="fill-parent" alt="slide" src="https://img.over-blog-kiwi.com/2/65/07/88/20180317/ob_f4c1e0_jindo-coreen-21.jpg"/>
        </Article>
    </List>
);

export default DemoList;
