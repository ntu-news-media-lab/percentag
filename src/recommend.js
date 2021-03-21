/*global chrome*/
import React, { Component } from 'react';
import RecomPaper from './recomPaper';

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended:
                [
                    {
                        title: "Stripe's value huts $95B",
                        img: "https://cdn.dealstreetasia.com/uploads/2018/09/Stripe-e1613972852450.png?fit=1024,512?resize=940,528",
                        date: Date().toLocaleString(),
                        match: 95
                    },
                    {
                        title: "BEENEXT, Qualgro invest in Vietnamese edtech startup Edmicro’s pre-Series A+ round",
                        img: "https://cdn.dealstreetasia.com/uploads/2020/08/online-education-e1609923082605.png?fit=950,477?resize=940,528",
                        date: Date().toLocaleString(),
                        match: 65
                    }
                ],
            savedTags: [],
        };        
        this.getRecommendation = this.getRecommendation.bind(this);
    }
    componentDidMount() {
        let newThis = this;
        chrome.storage.local.get(['tags'], function (result) {
            newThis.setState({
                savedTags: result.tags
            })
            newThis.getRecommendation();
        });
        
    }
    
    getRecommendation = async () => {
        console.log("savedTages in recommend to be send:" + this.state.savedTags);
        const response = await fetch('http://localhost:5000/api/getReco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                tags: this.state.savedTags,
            }),
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    // getTagApi() {
    //     this.callApiGetTag()
    //         .then(res => { 
    //             this.setState({ savedTags: res.express }) 
    //         })
    //         .catch(err => console.log(err));
    // }
    // callApiGetTag = async () => {
    //     const response = await fetch('http://localhost:5000/api/getTags');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);

    //     return body;
    //   };


    render() {
        return (
            <div>
                <p>Follow more tags to receive recommendations specific to your interest </p>
                <b>
                    Recommended For You
                </b>
                <RecomPaper recommendation={this.state.recommended} />

            </div>

        )
    }
}
