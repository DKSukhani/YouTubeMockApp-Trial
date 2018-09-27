import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// DIPESH COMMENT: THE FOLLOWING CODE ALSO WORKS
// ReactDOM.render(
//   <SearchBar />,
//   document.getElementById('app'),
// );
