import React from 'react';
import { camelToKebab } from '../../filters/stringFormat';

import { GridsContext } from '../../components/containers/Grid';

function gridify(Component, { forcedProps = {}, staticMethods = [], componentName } = {}) {

    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return (forcedProps[forcedPropsName] !== undefined) ? forcedProps[forcedPropsName] : defaultValue;
    }

    class GridifiedComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log('Props: ', this.props);
        }

        componentDidUpdate(prevProps) {
            console.log('Previous props: ', prevProps);
            console.log('Props: ', this.props);
        }

        render() {
            console.log('TOCAAARD', this.context);
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

            const styles = {
                gridColumn: `${col} / span ${width}`,
                gridRow: `${row} / span ${height}`,
                ...style
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

    GridifiedComponent.displayName = 'GridifiedComponent';

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

    staticMethods.forEach(method => GridifiedComponent[method] = Component[method]);

    return GridifiedComponent;
}



export default gridify;