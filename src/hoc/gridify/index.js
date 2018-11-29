import React from 'react';
import { camelToKebab } from '../../filters/stringFormat';
import uuid from 'uuid/v4';
import deepEqual from 'lodash.isequal';

import GridsContext from '../../store/context/Grids';
import { updateGridElement } from '../../store/actions/Grids';
import { getGrid, getGridExceptElements, getElement, getGridWidth, getElements } from "../../store/selectors/Grids";


function gridify(Component, { forcedProps = {}, staticMethods = [], componentName } = {}) {

    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return (forcedProps[forcedPropsName] !== undefined) ? forcedProps[forcedPropsName] : defaultValue;
    }

    class GridifiedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                uuid: uuid(),
            };
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            const { dispatch, store } = this.context;
            const { griduuid } = this.props;
            const { uuid } = this.state;

            dispatch(updateGridElement(
                {
                    grid: griduuid,
                    id: uuid,
                    element: this.getMinified(),
                },
            ));
        }


        isFullWidth() {
            return this.props.fullwidth === 'true' || forcedProps.fullWidth === 'true';
        }


        getMinified() {
            const { col, row, width, height, fullwidth, fullheight } = this.props;
            const { selfRowTemplate, selfColTemplate } = forcedProps;

            const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;

            return { type, col, row, width, height, fullwidth, fullheight, selfRowTemplate, selfColTemplate };
        }


        render() {
            const {
                griduuid,

                className,
                style,

                col,
                row,

                width,
                height,

                fullwidth,
                fullheight,

                children,
                ...otherProps,
            } = this.props;

            const specificClassName = camelToKebab(
                componentName ||
                Component.displayName ||
                `Gridified${Component.name || 'Component'}`
            );

            const classNames = [specificClassName, className].filter(e => !!e).join(' ');

            const spanWidth = this.isFullWidth() ? getGridWidth(this.context.store, { grid: griduuid }) : null;
            const styles = width > 0 && height > 0
                ? {
                    gridColumn: `${col} / span ${spanWidth || width}`,
                    gridRow: `${row} / span ${height}`,
                    ...style,
                }
                : {
                    display: 'none',
                    ...style,
                };


            return (
                <Component
                    className={classNames}
                    style={styles}

                    col={col}
                    row={row}

                    width={width}
                    height={height}

                    fullwidth={fullwidth}
                    fullheight={fullheight}

                    {...otherProps}
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

        fullwidth: getDefaultProps('fullwidth', 'false'),
        fullheight: getDefaultProps('fullheight', 'false'),
    };

    return GridifiedComponent;
}


export default gridify;