import React, { Component } from 'react';
import RecomPaper from './recomPaper';

export default class Recommend extends Component {
    render() {
        return (
            <div>
                <p>Follow more tags to receive recommendations specific to your interest </p>
                <b>
                    Recommended For You
                </b>
                <RecomPaper></RecomPaper>
            </div>

        )
    }
}
