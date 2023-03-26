import React, { Component } from 'react';
import './App.css';
// import { useState } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {passwords: ["hello"], entry: 'Enter text here'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   // Initialize state
//   // state = { passwords: [] , entry: ''};
//   // this.props.entry = this.setState("");

//   // Fetch passwords after first mount
//   // componentDidMount() {
//   //   this.getPasswords();
//   // }

//   // getPasswords = () => {
//   //   // Get the passwords and store them in state
//   //   fetch('/api/passwords')
//   //     .then(res => res.json())
//   //     .then(passwords => this.setState({ passwords }));
//   // }

//   handleSubmit(event) {
//     // event.preventDefault();
//     alert('A name was submitted: ' + this.state.value);
//     console.log(this.state.entry);
//     // entry => this.setState({this.state.entry});
//     // alert(`The name you entered was: ${this.state.entry}`)
//     this.setState({entry: this.state.value});
//     event.preventDefault();
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   render() {
//     const { passwords } = this.state;
//     // const { entry } = this.state;
//     // console.log("hello" + this.state.entry);

//     return (
//       <div className="App">
//         {/* Render the passwords if we have them */}
//         { passwords.length ? (
//           <div>
//             <h1>Geode Journaling</h1>
//             <ul>
//               <li>Made for HooHacks 2023</li>
//               <li>Madelyn K., Catherine X., Megan K.</li>
//             </ul>
//             <h2>Write a journal entry below:</h2><br></br>

//             <ul className="passwords">
//               {/*
//                 Generally it's bad to use "index" as a key.
//                 It's ok for this example because there will always
//                 be the same number of passwords, and they never
//                 change positions in the array.
//               */}
//               <form onSubmit={ this.handleSubmit }>
//               <label for="entry">Entry:</label><br></br>
//               {/* <input type="text" value={this.state.entry} onChange= {this.handleChange} >
//                 </input><br></br> */}
//                 <textarea value={this.state.value} onChange={this.handleChange} />
//               <input type="submit" value="Submit"></input>
//               </form>
//             </ul>
//             <p>your entry: {this.state.entry}</p>
//             {/* <button
//               className="more"
//               onClick={this.getPasswords}>
//               Get More
//             </button> */}
//           </div>
//         ) : (
//           // Render a helpful message otherwise
//           <div>
//             <h1>No passwords :(</h1>
//             <button
//               className="more"
//               onClick={this.getPasswords}>
//               Try Again?
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;


//////////////

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {passwords: ["hello"], entry: '', value: ""};
    // value has to stay, it clears the text area so that a character is only added once

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    // alert('A name was submitted: ' + this.state.entry);
    console.log(this.state.entry);
    // entry => this.setState({this.state.entry});
    // alert(`The name you entered was: ${this.state.entry}`)
    this.setState({entry: this.state.entry});
    event.preventDefault();
  }

  handleChange(event) {
    // this.setState({entry: event.target.value});
    this.setState({entry: this.state.entry + event.target.value});
    
    
  }

  render() {
    const { passwords } = this.state;
    // const { entry } = this.state;
    // console.log("hello" + this.state.entry);

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        { passwords.length ? (
          <div>
            <h1>Geode Journaling</h1>
            <ul>
              <li>Made for HooHacks 2023</li>
              <li>Madelyn K., Catherine X., Megan K.</li>
            </ul>
            <h2>Write a journal entry below:</h2><br></br>

            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              <form onSubmit={ this.handleSubmit }>
              <label for="entry">Entry:</label><br></br>
              {/* <input type="text" value={this.state.entry} onChange= {this.handleChange} >
                </input><br></br> */}
                <p>your entry: {this.state.entry}</p><textarea value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit"></input>
              </form>
            </ul>
            
            {/* <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button> */}
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;