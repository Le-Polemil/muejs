import React from 'react';
import { camelToKebab } from '../../filters/stringFormat';
import uuid from 'uuid/v4';

import GridsContext from '../../store/context/Grids';
import { updateGridElementAction } from '../../store/actions/Grids';


function gridify(Component, { forcedProps = {}, staticMethods = [], componentName } = {}) {

    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return (forcedProps[forcedPropsName] !== undefined) ? forcedProps[forcedPropsName] : defaultValue;
    }

    class GridifiedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { uuid: uuid() };
        }

        componentWillReceiveProps(nextProps, nextContext, snapshot) {
            const { dispatch, state } = nextContext;
            if (JSON.stringify(this.context.state.grids) !== JSON.stringify(state.grids)) {
                const { griduuid } = this.props;
                if (griduuid && state.grids && state.grids[griduuid]) {
	                dispatch(updateGridElementAction(
		                state,
                        {
                            griduuid,
                            elementuuid: this.state.uuid,
                            minifiedElement: this.getMinified(),
	                    },
	                ));
                }
            }
        }

        getMinified() {
            const { col, row, width, height, fullwidth, fullheight } = this.props;
            const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;

            return { type, col, row, width, height, fullwidth, fullheight };
        }


        render() {
            const {
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

            const styles = !forcedProps.noGridPlacement === 'true'
                ? {
                    gridColumn: `${col} / span ${width}`,
                    gridRow: `${row} / span ${height}`,
                    ...style
                }
                : {};


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