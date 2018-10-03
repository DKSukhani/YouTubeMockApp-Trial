import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (<div>Loading...</div>)
    }


    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-160by9">
                <ReactPlayer url={url} />
            </div>
            <div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>

            </div>


        </div>


    )

}

export default VideoDetail