import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_Keys from './../API_Keys';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: []
    };
  }

  componentDidMount() {
    YTSearch({ key: API_Keys, term: 'Atif Aslam' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  componentDidUpdate(prevState) {
    const { videos } = this.state;
    if (prevState.videos !== videos) {
      console.log(videos);
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}


// const App = () => {
//   return <div>
//     <SearchBar />
//   </div>;
// }

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// DIPESH COMMENT: THE FOLLOWING CODE ALSO WORKS
// ReactDOM.render(
//   <SearchBar />,
//   document.getElementById('app'),
// );
