import React, { Component } from 'react';
import VideoListItem from './video_list_item';


// DKS Comment: class based component and the use of props
class VideoList extends Component {
    render() {
        const VideoItems = this.props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelected={this.props.onVideoSelect}
                    key={video.etag}
                    video={video} />
            )
        });
        return (
            <div>
                <ul className="col-md-8 list-group">
                    {VideoItems}
                </ul>
            </div>
        );
    }
};

// DKS Comment: Functional component and the use of props
// const VideoList = (props) => {
//     const VideoItems = props.videos.map((video) => {
//         return <VideoListItem video={video} />
//     });

//     return (
//         <div>
//             <ul className='col-md-4 list-group'>
//                 {VideoItems}
//             </ul>
//         </div>
//     );

// };

export default VideoList