import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_Keys from './../API_Keys';
import YTSearch from 'youtube-api-search';

YTSearch({ key: API_Keys, term: 'dipesh sukhani' }, function (data) {
  console.log(data);
});


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }




  render() {
    return (
      <div>
        <SearchBar />
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
