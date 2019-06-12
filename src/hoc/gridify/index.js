import React from 'react';
import { camelToKebab } from '../../filters/stringFormat';
import uuid from 'uuid/v4';
import deepEqual from 'lodash.isequal';

import GridsContext from '../../store/context/Grids';
import { updateGridElement } from '../../store/actions/Grids';
import { getGridWidth } from "../../store/selectors/Grids";


function gridify(Component, { forcedProps = {}, staticMethods = [], componentName } = {}) {

    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return (forcedProps[forcedPropsName] !== undefined) ? forcedProps[forcedPropsName] : defaultValue;
    }

    class GridifiedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: uuid(),
                lastMinified: {},
            };
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            const { dispatch, store } = this.context;
            const { idgrid } = this.props;
            const { id, lastMinified } = this.state;

            const newMinified = this.getMinified();

            if (deepEqual(newMinified, lastMinified)) return;

            dispatch(updateGridElement({
                grid: idgrid,
                id: id,
                element: newMinified,
            }));
            this.setState(state => ({ lastMinified: newMinified }));
        }


        isFixed() {
            return (this.props.position === 'fixed' || forcedProps.position === 'fixed') && 'fixed';
        }

        isFullWidth() {
            return [true, 'true'].includes(this.props.fullwidth)
              || [true, 'true'].includes(forcedProps.fullwidth);
        }

        fullwidthValue() {
            const { idgrid, width } = this.props;

            const gridWidth = getGridWidth(this.context.store, { grid: idgrid });
            return this.isFullWidth() && gridWidth ? gridWidth : width;
        }


        getMinified() {
            const { col, row, height, fullwidth, fullheight } = this.props;
            const { selfRowTemplate, selfColTemplate } = forcedProps;

            const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;

            return { type, col: this.isFixed() ? 0 : col, row: this.isFixed() ? 0 : row, width: this.fullwidthValue(), height, fullwidth, fullheight, selfRowTemplate, selfColTemplate };
        }


        render() {
            // To get every transmissibleProps we remove all our customProps and get others with spread operator
            let {
                col: _col,
                row: _row,
                width: _width,
                height: _height,
                fullwidth: _fullwidth,
                fullheight: _fullheight,

                idgrid,
                className,
                style,
                children,

                position,

                justify,
                align,

                ...transmissibleProps
            } = this.props;

            const { type, col, row, width, height, fullwidth, fullheight } = this.getMinified();
            const { shouldTransmitProps } = forcedProps;

            const classNames = [camelToKebab(type), className, justify && `justify-${justify}`, align && `align-${align}`, this.isFixed()].filter(e => !!e).join(' ');


            let styles = { };

            if (width <= 0 && height <= 0) {
                styles['display'] = 'none';
            }
            else {
                if (col != 'auto') styles['--col'] = col;
                if (width != 1) styles['--width'] = width;
                if (row != 'auto') styles['--row'] = row;
                if (height != 1) styles['--height'] = height;
            }

            styles = { ...styles, ...style };

            const gridElementProps = shouldTransmitProps ? { idgrid, col, row, width, height, fullwidth, fullheight } : {};


            return (
                <Component
                    {...transmissibleProps}
                    {...gridElementProps}

                    className={classNames}

                    style={styles}
                >
                    { children }
                </Component>
            );
        }
    }


    staticMethods.forEach(method => GridifiedComponent[method] = Component[method]);

    GridifiedComponent.displayName = 'GridifiedComponent';

    GridifiedComponent.contextType = GridsContext;






    GridifiedComponent.defaultProps = {
        className: getDefaultProps('className', ''),
        style: getDefaultProps('style', {}),

        col: getDefaultProps('col', 'auto'),
        row: getDefaultProps('row', 'auto'),

        width: getDefaultProps('width', 1),
        height: getDefaultProps('height', 1),

        fullwidth: getDefaultProps('fullwidth', false),
        fullheight: getDefaultProps('fullheight', false),
    };

    return GridifiedComponent;
}


export default gridify;
