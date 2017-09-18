import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YT_API_KEY = "AIzaSyBsmgBB2ubX8fDYhAGndnT9NnaEGRx4-Lg";


export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

		YTSearch({key: YT_API_KEY, term: 'surf'}, (videos) => {
			this.setState({
				videos
			});
		});
	}

	render() {
			return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));