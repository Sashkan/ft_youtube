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

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchChange(term);
	}

	render() {
		return (
				<div className="search-bar">
					<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
				</div>
			);
	}

}

export default SearchBar;
