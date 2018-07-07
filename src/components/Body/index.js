import React from 'react';
import Grid from '../Grid';

import './index.styl';

export default class Body extends Grid {
    getClassName() {
        return `body${this.className && ' ' + this.className}`;
    }
};

export * from './BodyItem';