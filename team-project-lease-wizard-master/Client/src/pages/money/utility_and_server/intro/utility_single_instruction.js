/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'

export class UtilitySingleInstruction extends Component {

    render() {
        const {item} = this.props
        return (
            <p>{item}</p>
            )
    }
}

export default UtilitySingleInstruction
