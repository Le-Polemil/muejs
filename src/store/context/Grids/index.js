import React, { Component } from 'react';
import { gridsReducer } from '../../reducers/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;

export class GridsProvider extends Component {
	constructor (props) {
		super(props);

		this.state = {
			grids: {},
			dispatch: action => {
                this.setState(state => gridsReducer(state, action));
            },
		};
	}


	render() {
		return (
			<GridsContext.Provider value={this.state}>
				{ this.props.children }
			</GridsContext.Provider>
		)
	}
}
