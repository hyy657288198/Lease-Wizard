/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import SingleQandA from './q_and_a'
import { uid } from 'react-uid'


class QandA extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }  // original code by Shaun

        this.state = {           // added by Quan
            allSet: false        // fixed by M
        }                        // added by Quan

    }


    render() {
        const questions = ["Q1","Q2","Q3","Q4","Q5","Q6"]
        return (
            <div>
                <h1>Timeline: Question and Answers!</h1>
                <nav>
                    <ul>
                        {questions.map((item) =>
                            <SingleQandA key={uid(item)} id={item} state={this.props.state} />
                        )}
                    </ul>
                </nav>
            </div> );
    }
}

export default QandA;
