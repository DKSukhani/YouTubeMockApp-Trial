import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_Keys from './../API_Keys';
import YTSearch from 'youtube-api-search';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_Keys, term: 'Indorse Dipesh' }, (videos) => {
      this.setState({ videos });
    });



  }

  render() {
    return (
      <div>
        <SearchBar />
        {console.log(this.state)}
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
