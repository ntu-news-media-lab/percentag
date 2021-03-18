import React, { Component } from 'react'
import TagsPaper from './tagsPaper'
import CurrentTagPaper from './currentTagPaper'
import ApiCall from './Backend/apiCall';

export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ["apple"],
        };
        this.getTags = this.getTags.bind(this);
    }

    componentDidMount() {

    }
  
    getTags(e) {
        this.setState({
            tags: e
        })
        
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

                <TagsPaper></TagsPaper>
                <b>
                    From this article
                </b>
                {/* pass Tag array name here*/}
                <CurrentTagPaper tagArray={this.state.tags} />
                <ApiCall getTags={this.getTags}  tags={this.state.tags}/>
            </div>
        )
    }
}
