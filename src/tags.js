/*global chrome*/
import React, { Component } from 'react'
import TagsPaper from './tagsPaper'
import CurrentTagPaper from './currentTagPaper'
import ApiCall from './Backend/apiCall';

export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [""],
            savedTags: ["Stripe", "Investment"]
        };
        this.getTags = this.getTags.bind(this);
        this.getChromeStoragefunction = this.getChromeStoragefunction.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.getChromeStoragefunction(this.state.savedTags);    
    }
    
    getChromeStoragefunction(saved) {
        chrome.storage.onChanged.addListener(function (changes, namespace) {
        let tempArray = [...saved];
          for (var key in changes) {
            var storageChange = changes[key];
            storageChange.newValue.map(e => { console.log("new values " + e) })
            // console.log('Storage key "%s" in namespace "%s" changed. ' +
            //             'Old value was "%s", new value is "%s".',
            //             key,
            //             namespace,
            //             storageChange.oldValue,
            //             storageChange.newValue);
            storageChange.newValue.map(e => { tempArray.push(e) })
          }
          this.updateState(tempArray);  
        }  ); 
    }
    updateState(tempArray){
        this.setState({
            savedTags: [""]
        })
        console.log("In tags.js, savedTags: "+ this.state.savedTags);
    }
    getTags(e) {
        this.setState({
            tags: e
        })
        console.log(e)
    }

    render() {

        return (
            <div >
                <p>
                    Get recommendations for articles that matches your
                    interests when you follow more tags:
                </p>
                <b>
                    You are following
                </b>

                <TagsPaper savedTagArray={this.state.savedTags}/>
                <b>
                    From this article
                </b>
                
                <CurrentTagPaper tagArray={this.state.tags} />
                <ApiCall getTags={this.getTags}  tags={this.state.tags}/>
            </div>
        )
    }
}
