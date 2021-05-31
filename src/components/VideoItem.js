import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img className="ui small image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <h3>{video.snippet.title}</h3>
            </div>
        </div>
    );
};

export default VideoItem;
