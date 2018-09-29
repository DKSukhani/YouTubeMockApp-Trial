import React, { Component } from 'react';



// DIPESH COMMENT: THE FOLLOWING DOES NOT WORK
// const SearchBar = (
//   <div>
//     Hello,
//   </div>
// );

// DIPESH COMMENT: THE FOLLOWING WORKS
// const SearchBar = () => {
//   return <div>
//     Hi how are you?
// </div>;
// };


// DKS Comment: the below is a functional component and does not know what is being inputed
// const SearchBar = () => {
//   return <input />
// };

// DKS Comment: the below is a class based component and knows what is being inputed with the state

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }


  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({ term: event.target.value })} />
        Value of the input is: {this.state.term}
      </div >);

    // return <input onChange={(event) => { console.log(event.target.value) }} />;
  }

}


// based on the syntax: setState is a function / method that uses object as its argument

// class SearchBar extends Component {
//   render() {
//     return <input onChange={(event) => { console.log(event.target.value) }} />;
//   }

// }

// class SearchBar extends Component {
//   render() {
//     return <input onChange={this.onInputChange} />;
//   }

//   onInputChange(_event) {
//     console.log(_event.target.value);

//   }

// }

export default SearchBar;