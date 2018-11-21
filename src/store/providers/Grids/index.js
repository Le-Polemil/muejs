import React, { Component } from 'react';
import GridsContext from '../../contexts/Grids';


export class GridsProvider extends Component {
	constructor (props) {
		super(props);
		this.state = { grids: [] };
	}

	addGrid(grid) {
		console.log('Got :', grid);
		this.setState(prevState => {
			const grids = [ ...prevState.grids ];
			grids.push(grid);
			return { grids }
		});
	}

	render() {
		const actions = {
			addGrid: (grid) => this.addGrid(grid),
		};

		return (
			<GridsContext.Provider
				value={{
					state: this.state,
					actions,
				}}
			>
				{ this.props.children }
			</GridsContext.Provider>
		)
	}
}