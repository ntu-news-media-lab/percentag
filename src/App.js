/*global chrome*/
import React from 'react';
import './App.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tags from './tags';
import Recommend from './recommend';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tags",
      savedTags: []
    };
    this.handleTab = this.handleTab.bind(this);
    this.saveArrayToState = this.saveArrayToState.bind(this);
  }


  componentDidMount() {
    let newThis = this;
    chrome.storage.local.get(['tags'], function (result) {
      console.log("retrieved tags is" + result.tags);
      // you can use the variable or set to any state variable from here
      newThis.saveArrayToState(result.tags);
    });
  }

  saveArrayToState = (array) => {
    this.setState({
      savedTags: array
    })
    console.log("saved tags in app.js: " + this.state.savedTags[0])
  }

  handleTab(value) {
    this.setState({
      tab: value
    });
  }

  render() {

    let tagsTab = <Tags savedTags={this.state.savedTags} />;
    let recommendTab = <Recommend savedTags={this.state.savedTags}/>;
    let showtab;
    if (this.state.tab === "tags") {
      showtab = tagsTab;
    }
    else if (this.state.tab === "recommend") {
      showtab = recommendTab;
    }
    return (
      <React.Fragment>
        <div className="App">
          <img src={"/images/LogoFullB.png"} style={{ paddingLeft: "8px", paddingTop: "5px" }} className="App-logo" alt="logo" />
          <div>

            <ToggleButtonGroup
              value={this.state.tab}
              exclusive
              aria-label="tabs"
              className="tabsBar"
              size="large"

            >
              <ToggleButton value="tags" style={{ width: "125px", height: "35px", fontSize: 13 }} onClick={() => this.handleTab("tags")} >
                Tags
              </ToggleButton>
              <ToggleButton value="recommend" style={{ width: "130px", height: "35px", fontSize: 13 }} onClick={() => this.handleTab("recommend")} >
                Recommended
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="showTab">
              {showtab}
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}



