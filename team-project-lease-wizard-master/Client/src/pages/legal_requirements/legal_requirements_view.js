/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import Requirement from './legal_requirements'
import { uid } from 'react-uid'
import legalRequirementViewContent from '../allPagesContents/mainContent/legal_requirements_view_content'

class LegalRequirement extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }  // original code by Shaun

        this.state = {           // added by Quan
            allSet: true         // added by Quan
        }                        // added by Quan

    }


    // this func is for the check box in nav bar,
    // when the page is fully filled, the check box will be checked by receiving the date "allSet" is true
    // update allSet when the page is fully filled !!!!!!!!!!!!!!!!
    CheckAllSet(e) {
        e.preventDefault();
        if (("aaaa is filled") && ("bbbb is filled") && ("cccc is filled")) {
            this.setState({
                allSet: true
            })
            let tempProps = this.props.state
            tempProps.allSet = this.state.allSet // true
            this.props.handler(tempProps)
        } else {
            this.setState({
                allSet: false
            })
        }
    }

    render() {
        const questions = ["Q1","Q2","Q3","Q4","Q5","Q6", "Q7", "Q8"]
        return (
            <div>
                <h1>{legalRequirementViewContent.heading}</h1>
                {legalRequirementViewContent.info_lines.map((item) => <p key={uid(item)} >{item}</p>)}
                <br></br>
                <nav style={{ width: 1000 }}>
                    <ul>
                        {questions.map((item) =>
                            <Requirement key={uid(item)} id={item} state={this.props.state} handler={this.props.handler} />
                        )}
                    </ul>
                </nav>
            </div> );
    }
}

export default LegalRequirement;
