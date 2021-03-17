import React, { Component } from 'react'
import TagsPaper from './tagsPaper'
import CurrentTagPaper from './currentTagPaper'
export default class Tags extends Component {
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
                <CurrentTagPaper></CurrentTagPaper>
                
            </div>
        )
    }
}
