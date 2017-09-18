import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''	
		}
	}

	// Custome functions
	updateName(name) {
		this.setState({
			term: name
		})
	}

	render() {
		return (
				<div>
				<p>{this.state.term}</p>
				<input 
				value={this.state.term}
				onChange={(event) => this.updateName(event.target.value)} />
					
				</div>
			);
	}

}

export default SearchBar;
