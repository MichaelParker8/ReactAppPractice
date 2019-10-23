import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {text: 'placeholder text from this.state.text',
                    inputValue: '',
                    loaded: false
    };
  }
  hasLoaded = () => {
    this.setState({loaded: !this.state.loaded})
    console.log(this.state.loaded)
  }
  inputValue = (selectObject) =>{
    this.setState({inputValue: selectObject.target.value })
  } 

  render(){
    let h1;
    if (this.state.loaded){
        h1 = <h1>{this.props.string}<br></br> 
          {this.state.text}<br></br>
          {this.state.inputValue}
          <br></br>
          <input id = 'inputText' placeholder={this.state.text} onChange={this.inputValue.bind(this)}>
          </input></h1>
    }
    return (
      <div className="App">
        <header className="App-header">
        {h1}
        {/* <h1>{this.props.string}<br></br> 
        {this.state.text}<br></br>
        {this.state.inputValue}
        <input id = 'inputText' placeholder={this.state.text} onChange={this.inputValue.bind(this)}>
        </input></h1> */}
        <br></br>
        <button onClick={this.hasLoaded} >Load Page</button>
        </header>
      </div>
    );
  }
}


export default App;
