import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	// Check out the map() js function
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			key={video.etag} 
			video={video} 
			onVideoSelect={props.onVideoSelect}
			/>
		);
	})

	// We're using bootstrap, these are some default CSS classes
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;