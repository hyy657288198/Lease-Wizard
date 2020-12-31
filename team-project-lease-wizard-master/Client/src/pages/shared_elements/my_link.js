/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class MyLink extends Component {

    render() {
        const LinkStyle = {
            color: "black"
        }
        return (
                <Link style = {LinkStyle}></Link>
        )
    }
}

export default MyLink
