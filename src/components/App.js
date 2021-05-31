import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import useVideos from '../hooks/useVideos';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, doSearch] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    };

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar OnSubmit={doSearch} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;