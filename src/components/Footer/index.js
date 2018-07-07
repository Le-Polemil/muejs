import React  from 'react';
import './index.styl';

import Grid from '../Grid';


export default class Footer extends Grid {
    getClassName() {
        return `footer${this.className && ' ' + this.className}`;
    }
};

export * from './FooterItem';