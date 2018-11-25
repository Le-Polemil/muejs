import React, { Component } from 'react';
import { gridsReducer } from '../../reducers/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;

export class GridsProvider extends Component {
	constructor (props) {
		super(props);

		this.state = {
			store: {},
			dispatch: action => {
				if (!action) return;
                this.setState(({ store }) => ({
	                store: {
		                grids: gridsReducer(store.grids, action),
	                }
                }));
            },
		};
	}


	render() {
		return (
			<GridsContext.Provider value={{ state: this.state.store, dispatch: this.state.dispatch }}>
				{ this.props.children }
			</GridsContext.Provider>
		)
	}
}
