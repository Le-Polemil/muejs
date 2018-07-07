import React from 'react';
import { GridElement } from "../../Grid/GridElement/index";

export class BodyElement extends GridElement {
    getClassName() {
        return `body-element${this.className && ' ' + this.className}`;
    }
};