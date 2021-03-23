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
            savedTags: [""]
        };
        this.getTags = this.getTags.bind(this);
        this.getChromeStoragefunction = this.getChromeStoragefunction.bind(this);
        this.saveArrayToState = this.saveArrayToState.bind(this);
    }

    componentDidMount() {
        let newThis = this;
        chrome.storage.local.get(['tags'], function (result) {
            // console.log("retrieved tags is" + result.tags);
            newThis.saveArrayToState(result.tags);
        });
        this.getChromeStoragefunction();
    }

    componentWillUnmount() {
        let newThis = this;
        chrome.storage.local.set({ tags: newThis.state.savedTags }, function () {
            console.log("saved: " + newThis.state.savedTags);
        })
    }

    getChromeStoragefunction() {
        let newThis = this;
        chrome.storage.onChanged.addListener(function (changes, namespace) {
            let tempArray = [...newThis.state.savedTags];
            for (var key in changes) {
                var storageChange = changes[key];
                storageChange.newValue.map(e => { 
                    if (!tempArray.includes(e)){
                        tempArray.push(e)
                    } 
                })
                newThis.saveArrayToState(tempArray);
            }
        });
    }

    saveArrayToState = (array) => {
        this.setState({
            savedTags: array
        })
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
                
                <TagsPaper savedTagArray={this.state.savedTags} />

                <b>
                    From this article
                </b>
                
                <CurrentTagPaper tagArray={this.state.tags} />
                
                <ApiCall getTags={this.getTags} tags={this.state.tags} />
            </div>
        )
    }
}
