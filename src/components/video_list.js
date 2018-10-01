import React, { Component } from 'react';

// DKS Comment: class based component and the use of props
class VideoList extends Component {
    render() {
        return (
            <div>
                <ul className="col-md-4 list-group">
                    {this.props.videos.length}
                </ul>
            </div>
        );
    }
};

// DKS Comment: Functional component and the use of props
// const VideoList = (props) => {
//     return (
//         <div>
//             <ul className="col-md-4 list-group">
//                 {props.videos.length}
//             </ul>
//         </div>
//     );

// };

export default VideoList