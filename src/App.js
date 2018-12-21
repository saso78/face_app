import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Clarifai from'clarifai';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import './App.css';
 

const app = new Clarifai.App({
 apiKey: 'e1539ecaf18c4b958e63c882f47ad6df'
});
 

const particlesOptions = {
                particles: {
                  number: {
                    value:80, 
                    density:{
                      enable:true,
                      value_area:800,
                    }
                  }
                }
              }

class App extends Component {
	constructor (){
		super();
		this.state ={
			input:'',
      imageUrl:''
		}
	}

onInputChange = (event) => {
this.setState({input: event.target.value});
}

onButtonSubmit = () => {
this.setState({imageUrl: this.state.input});  
  app.models
  .predict(
    Clarifai.COLOR_MODEL, 
    this.state.input)
  .then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
}

  render() {
    return (
      <div className="App">
      <Particles className="particles" 
              params={particlesOptions}
              
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={this.state.imageUrl}/> 
              
      </div>
    );
  }
}

export default App;
