/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import SingleChangeParties from './change_to_parties'
import { uid } from 'react-uid'
import changesToPartiesViewContent from '../../allPagesContents/mainContent/changes_to_parties_view_content'

class ChangeParties extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }  // original code by Shaun

        this.state = {
            allSet: false         // fixed by M
        }

    }


    render() {
        const questions = ["Q1","Q2","Q3","Q4"]
        return (
            <div>
                <h1>{changesToPartiesViewContent.heading}</h1>
                <nav style = {{width: 1000}}>
                    <ul>
                        {questions.map((item) =>
                            <SingleChangeParties key={uid(item)} id={item} state={this.props.state} />
                        )}
                    </ul>
                </nav>
            </div> );
    }
}

export default ChangeParties
