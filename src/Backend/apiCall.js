/*global chrome*/
import React, { Component } from 'react';
import '../App.css';

export default class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      currentURL: 'https://www.dealstreetasia.com/stories/aiot-startup-aiforward-77m-232438/',
    };
    this.sendTags = this.sendTags.bind(this);
    this.getCurrentURL = this.getCurrentURL.bind(this);
  }

  componentDidMount() {
    this.getCurrentURL()
    // this.getTagApi()
  }
  getCurrentURL(){
    chrome.tabs.query({ currentWindow: true }, tabs => {
      let url = tabs[0].url;
      url = url.toString()
      if(url !== this.state.currentURL){
        this.setState({
          currentURL: url
        })
        console.log(this.state.currentURL)
        this.getTagApi(url)
      }
    }); 
    
  }
 

  getTagApi(url) {

    console.log(this.state.currentURL)
    this.callApi()
      .then(res => this.sendTags(res.express))
      .catch(err => console.log(err));
  }

  callApi = async () => {

    const response = await fetch('http://localhost:5000/api/scrap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: this.state.currentURL }),
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  sendTags(value) {
    this.props.getTags(value);
  }


  render() {
    let tagArray = this.props.tags;

    return (
      <div className="App">
        

        
      </div>
    );
  }
}
