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
			dispatch: transmitStore => {
				const action = transmitStore(this.state.store);

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
			<GridsContext.Provider value={ this.state }>
				{ this.props.children }
			</GridsContext.Provider>
		)
	}
}
