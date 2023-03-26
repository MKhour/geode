import React, { Component } from 'react';
import './App.css';

const cohere = require("cohere-ai");
cohere.init("9d5L8VPsV4SepwOYwBCLWzAMawvGos0LxmsCI4QM");
const examples = [
  ({text: "If I don't get an internship, I'll never get a job", label: "Catastrophizing"}),
  ({text: "I'll never be able to find love", label: "Catastrophizing"}),
  ({text: "What if I fail my class?", label: "Anxiety"}),
  ({text: "I can't stop thinking that I might have cancer or another serious disease", label: "Anxiety"}),
  ({text: "I'm inherently unlikable", label: "Low self esteem"}),
  ({text: "I'm bad at what I do", label: "Low self esteem"}),
]


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {entry: '', value: "", finished: false, inputs: [], classifications: []};
    // value has to stay, it clears the text area so that a character is only added once

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetch passwords after first mount
  componentDidMount() {
    // this.classifyText(this.state.inputs);
  }

  handleSubmit(event) {
    console.log(this.state.entry);
    this.setState({finished: true, inputs: this.state.entry.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g)}); 
    // console.log(this.state.entry.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g));
    this.classifyTextAPI(this.state.entry.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g));
    event.preventDefault();
  }

  handleChange(event) {
    // updates entry value to include newly typed character
    this.setState({entry: this.state.entry + event.target.value});
    
  }

  classifyTextAPI = (input) => {
    console.log("INPUT ARG IN FRONTENT IS:" + input);
    // Get the passwords and store them in state
    fetch('/api/classify-text?' + new URLSearchParams({
      input: input,
    }))
      .then(res => res.json())
      .then(classifications => this.setState({ classifications }));
  }

  /*
  async classifyExamples(input) {

    const response = await cohere.classify({
      inputs: input,
      examples: examples,
    })
  
    const classifications = response.body.classifications
    const predictions = classifications.map(classification => classification.prediction)
    console.log("reponse from classify examples is: " + predictions)
    console.log("type in cohere api call is: " + typeof(predictions))
  
    return predictions
  }
*/
  render() {
    const { finished } = this.state;
    const {classifications} = this.state;

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
            <p>your results: </p>
            <ul className='passwords'>
                {classifications.map((classif, index) =>
                <li key={index}>
                  {classif}
                </li>
                )}
            </ul>

            

          </div>
        )}

      </div>
    );
  }
}

export default App;