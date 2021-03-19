import React, { Component } from 'react';
import RecomPaper from './recomPaper';

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: 
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
        this.getTagApi = this.getTagApi.bind(this);
    }
    componentDidMount() {
        this.getTagApi()
        
    }

    getTagApi() {
        this.callApiGetTag()
            .then(res => { 
                this.setState({ savedTags: res.express }) 
            })
            .catch(err => console.log(err));
    }
    callApiGetTag = async () => {
        const response = await fetch('http://localhost:5000/api/getTags');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
      
 
    render() {
        return (
            <div>
                <p>Follow more tags to receive recommendations specific to your interest </p>
                <b>
                    Recommended For You
                </b>
                <RecomPaper recommendation={this.state.recommend}/>
                
            </div>

        )
    }
}
