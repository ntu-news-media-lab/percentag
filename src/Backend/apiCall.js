import React, { Component } from 'react';
import '../App.css';

export default class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    };
    this.sendTags = this.sendTags.bind(this);
  }

  componentDidMount() {
   this.getTagApi()
  }

  getTagApi(){
    this.callApi()
    .then(res => this.sendTags(res.express))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:5000/api/scrap');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  sendTags(value) {
    this.props.getTags(value);
  }



  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    let tagArray = this.props.tags;

    return (
      <div className="App">
        {/* {tagArray.map(e => <p key={e}>{e}</p>)} */}

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
