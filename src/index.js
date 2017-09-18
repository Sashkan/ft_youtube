import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Use this one for Youtube API
import YTSearch from 'youtube-api-search';

// Import our custom Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// You can require an API key on google.developers
const YT_API_KEY = "AIzaSyBsmgBB2ubX8fDYhAGndnT9NnaEGRx4-Lg";


export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [], //When loading the app, we don't have any videos (yet!)
			selectedVideo: null
		};

		// Search for videos
		YTSearch({key: YT_API_KEY, term: 'surf'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
			return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));