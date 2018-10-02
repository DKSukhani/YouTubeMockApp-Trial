import React, { PureComponent } from 'react';

const VideoDetail = ({ video }) => {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-160by9">
                <iframe className="embed-responsive-item stc={url}"></iframe>
            </div>
            <div>
                <div>
                    {Video.snippet.title}
                    {Video.snippet.description}
                </div>

            </div>

            <div></div>
        </div>


    )

}

export default VideoDetail