import React from 'react';

function gridify(Component, staticMethods = []) {
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
            const { col = 1, row = 1, width = 1, height = 1, fullwidth = "false", fullheight = "false", children, ...otherProps } = this.props;
            return (
                <Component col={col} row={row} width={width} height={height} fullwidth={fullwidth} fullheight={fullheight} {...otherProps}>
                    { children }
                </Component>
            );
        }
    }
    staticMethods.forEach(method => GridifiedComponent[method] = Component[method]);
    return GridifiedComponent;
}

export default gridify;