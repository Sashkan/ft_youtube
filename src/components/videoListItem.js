import React, { Component } from 'react';

// When expecting only one prop, you can use this syntaxt instead of (props) and then {props.stuff}
const VideoListItem = ({video, onVideoSelect}) => {
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imgUrl} className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">
						<p>{video.snippet.title}</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;