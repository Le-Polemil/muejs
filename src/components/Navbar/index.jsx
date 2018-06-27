import React, { Component } from 'react';
import './index.styl';
import Grid from "../Grid/index.jsx";
import GridElement from "../Grid/GridElement/index.jsx";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.children = props.children;
        if (this.children && !Array.isArray(this.children)) this.children = [this.children];
    }

    renderChildren () {
        if (!this.children) return null;
        return this.children.map((element, index) => {
            const style = {
                justifySelf: element.props.justify || "start",
            };
            // element.type.name === 'NavLogo'
            return (
                <GridElement key={index} style={style} col={index + 1} row={1}>
                    { element }
                </GridElement>
            );
        });
    };
    render () {
        return (
            <Grid className="navbar" adaptToContent>
                { this.renderChildren() }
            </Grid>
        );
    }
};

export const NavLogo = ({ children, imgSrc }) => {
    if (!children && !imgSrc) return null;
        return (imgSrc) ? <img className='logo' src={imgSrc} alt={children}/> : <a className='brand' href='/'>{ children }</a>
};

export const NavLabel = ({ label, route }) => {
    return (
        <a className='navlabel' href={ route }>
            { label }
        </a>
    );
};

export const NavIcon = ({ icon, route }) => {
    return (
        <a className='navicon' href={ route }>
            <i className="material-icons">{ icon }</i>
        </a>
    );
};