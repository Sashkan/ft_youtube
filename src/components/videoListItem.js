import React, { Component } from 'react';

const VideoListItem = ({video}) => {
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
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