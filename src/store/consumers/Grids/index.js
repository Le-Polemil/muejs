import React, { Component } from 'react';
import GridsContext from '../../contexts/Grids';

export class GridsConsumer extends Component {
	render() {
		const { children } = this.props;
		return (
			<GridsContext.Consumer>
				{ ({ state, actions }) => (
					<div>
						Coucou { JSON.stringify(state.grids) }
						<button onClick={() => actions.addGrid({})}>AddGrid !</button>
					</div>
				)}
			</GridsContext.Consumer>
		)
	}
}