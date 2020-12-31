/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import TimelineCalculator from "./../pages/Timeline/Questions_and_Answers/calculator";

export class ListItem extends Component {
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false
        }
    }
    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }
    render() {
        let divStyle = {
            hidden: {
                visibility: "hidden",
                height: 0,
                opacity: 0
            },
            visible: {
                visibility: "visible",
                height: "auto",
                opacity: 1
            }
        }
        let content = this.props.detail
        let hiddenProperty = this.state.active ? divStyle.visible : divStyle.hidden
        let rightIconHiddenProperty = (this.state.active ? 'active' : null)
        if (this.props.text === "Timeline Calculator"){
            content = <TimelineCalculator/>
            hiddenProperty = divStyle.visible
            rightIconHiddenProperty = ('active')
        }
        return (
            <li
                className={this.state.active ? 'active' : null}
                onClick={this.toggleClass}
            >
                <ChevronRight className={"chevronRight " + rightIconHiddenProperty} size={25} />
            <span>{this.props.text}</span>
                <div style={hiddenProperty}>{content}</div>
            </li>
        )
    }
}

export default ListItem
