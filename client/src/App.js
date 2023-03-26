import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {entry: '', value: "", finished: false};
    // value has to stay, it clears the text area so that a character is only added once

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.entry); // doesn't work but I'll leave it
    this.setState({finished: true}); 
    event.preventDefault();
  }

  handleChange(event) {
    // updates entry value to include newly typed character
    this.setState({entry: this.state.entry + event.target.value});
    
    
  }

  render() {
    const { finished } = this.state;

    return (
      <div className="App">

         {/* header */}
        <div>
          <h1>Geode Journaling</h1>
          <ul>
            <li>Made for HooHacks 2023</li>
            <li>Madelyn K., Catherine X., Megan K.</li>
          </ul>
          <h2>Write a journal entry below:</h2><br></br>
        </div>

        { !finished ? (
          // if not finished:
          <div>

            <ul className="passwords">
              <form onSubmit={ this.handleSubmit }>
                <p>your entry:
                {/* manual spacing, can replace with CSS/styling */}
                <br></br>
                <br></br>
                {this.state.entry}</p>

                <textarea value={this.state.value} onChange={this.handleChange}/>
                <br></br> 

                <input type="submit" value="Done editing"></input>
              </form>
            </ul>
          </div>
        ) : (
          // if finished
          <div>
            <ul className="passwords">
                <p>your entry: <br></br><br></br>
                {this.state.entry}</p>
            </ul>
            <ul className="passwords">
              <p>your results: </p>
            </ul>

            

          </div>
        )}
      </div>
    );
  }
}

export default App;