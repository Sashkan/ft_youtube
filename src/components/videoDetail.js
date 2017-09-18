import React, { Component } from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	// This is how you include a variable inside of a string
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="col-md-8 video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;